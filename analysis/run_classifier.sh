#!/bin/bash
# Automated JD classifier runner
# Run after any new JDs are added to jd_data/
# Usage: ./run_classifier.sh

set -e

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
LOG_FILE="/tmp/classify_jds_$(date +%Y%m%d_%H%M%S).log"

echo "JD Classifier running at $(date)" | tee "$LOG_FILE"

cd "$SCRIPT_DIR"

# Run classifier
python3 classify_jds.py 2>&1 | tee -a "$LOG_FILE"

# Run consistency report
echo "" | tee -a "$LOG_FILE"
echo "Classifier completed at $(date)" | tee -a "$LOG_FILE"
echo "Log saved to: $LOG_FILE"

# Report results
if [ -f "llm_classifications.csv" ]; then
    TOTAL_ROWS=$(( $(wc -l < "llm_classifications.csv") - 1 ))
    echo "Total JDs classified: $TOTAL_ROWS" | tee -a "$LOG_FILE"
fi
