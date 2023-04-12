from datetime import datetime
import os

working_directory = os.getcwd()
path = working_directory + '_python/test_cron_files/test_cron.txt'
print(f"Current working directory: {working_directory}")
print(f"File path: {path}"

now = datetime.now()
formatted_date = now.strftime('%Y%m%d%H%M%S')

print(f"Formatted date: {formatted_date}")

with open(path, 'a', encoding='utf-8') as f:
    f.write(formatted_date + '\n')
