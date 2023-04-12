from datetime import datetime
import os

print(f"Current working directory: {os.getcwd()}")

now = datetime.now()
formatted_date = now.strftime('%Y%m%d%H%M%S')

print(f"Formatted date: {formatted_date}")

with open('test_cron_2.txt', 'a', encoding='utf-8') as f:
    f.write(formatted_date + '\n')
