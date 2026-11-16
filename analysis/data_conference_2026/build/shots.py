#!/usr/bin/env python3
"""Open a built deck, report script errors, and screenshot the final step of the named slides.

Usage:  uv run --with playwright python analysis/data_conference_2026/build/shots.py DECK OUTDIR [WIDTH HEIGHT] [slide,ids]
With no slide ids it only lists the slides and any script errors.
"""
import asyncio
import pathlib
import sys

from playwright.async_api import async_playwright


async def main(deck, out, width, height, ids):
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={"width": width, "height": height})
        errors = []
        page.on("pageerror", lambda error: errors.append(str(error)))
        await page.goto(pathlib.Path(deck).resolve().as_uri())
        await page.wait_for_timeout(1000)
        print("slides:", await page.evaluate("SLIDES.map(S => S.id).join(',')"))
        for slide in ids:
            index = await page.evaluate(f"SLIDES.findIndex(S => S.id === '{slide}')")
            await page.evaluate(f"Anim.fast = true; document.body.classList.add('fast'); goSlide({index})")
            await page.wait_for_timeout(400)
            for _ in range(12):
                if await page.evaluate("DECK.step >= DECK.steps.length"):
                    break
                await page.keyboard.press("ArrowRight")
                await page.wait_for_timeout(250)
            await page.wait_for_timeout(2500)
            await page.screenshot(path=f"{out}/{slide}_{width}.png")
        print("errors:", errors or "none")
        await browser.close()


if __name__ == "__main__":
    args = sys.argv[1:]
    deck, out = args[0], pathlib.Path(args[1])
    out.mkdir(parents=True, exist_ok=True)
    width, height = (int(args[2]), int(args[3])) if len(args) >= 4 else (1280, 720)
    ids = args[4].split(",") if len(args) >= 5 else []
    asyncio.run(main(deck, out, width, height, ids))
