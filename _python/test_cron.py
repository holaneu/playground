from datetime import datetime
import os

print(f"Current working directory: {os.getcwd()}")

now = datetime.now()
formatted_date = now.strftime('%Y%m%d%H%M%S')

print(f"Formatted date: {formatted_date}")

with open('_python/test_cron_files/test_cron.txt', 'a', encoding="utf-8") as f:
    f.write(formatted_date + '\n')
