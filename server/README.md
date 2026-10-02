# Dr. Geetanand Rao - Backend Service

This is the optional standalone backend API for Dr. Geetanand Rao's medical oncology website.

## Endpoints:
- `GET /api/health` - Health check status
- `POST /api/contact` - Receives consultation enquiries and dispatches emails via SMTP

## Environment Variables:
```env
PORT=5000
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
RECIPIENT_EMAIL=drgeetanandrao@gmail.com
```

## Running Locally:
```bash
npm install
npm start
```
