from datetime import datetime

now = datetime.now()
formatted_date = now.strftime('%Y%m%d%H%M%S')

with open(f'_python/test_cron_files/test_cron_{formatted_date}.txt', 'x', encoding="utf-8") as f:
    f.write(formatted_date)
