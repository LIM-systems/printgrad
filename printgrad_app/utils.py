import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from printgrad.settings import EMAIL_HOST_USER, EMAIL_HOST_PASSWORD, RECIPIENTS, EMAIL_HOST, EMAIL_PORT

def send_email(subject, body):
    # Ваши учетные данные
    sender_email = EMAIL_HOST_USER
    sender_password = EMAIL_HOST_PASSWORD
    to_email = RECIPIENTS

    # Создаем объект MIMEText с телом письма
    message = MIMEMultipart()
    message["From"] = sender_email
    message["To"] = to_email
    message["Subject"] = subject
    message.attach(MIMEText(body, "plain"))

    # Подключение к SMTP-серверу GMail
    with smtplib.SMTP(EMAIL_HOST, EMAIL_PORT) as server:
        server.starttls()
        server.login(sender_email, sender_password)

        # Отправка письма
        server.sendmail(sender_email, to_email, message.as_string())