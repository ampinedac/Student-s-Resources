# Configuración de EmailJS para Mensajes de Agradecimiento

## 🚀 Pasos para Activar el Envío de Emails

### 1. Crear Cuenta en EmailJS (GRATIS)
1. Ve a: https://www.emailjs.com/
2. Regístrate con tu email: **angelapineda980@gmail.com**
3. Confirma tu cuenta

### 2. Configurar el Servicio de Email
1. En el dashboard de EmailJS, ve a **"Email Services"**
2. Haz clic en **"Add New Service"**
3. Selecciona **"Gmail"** 
4. Sigue las instrucciones para conectar tu cuenta de Gmail
5. **ID del servicio sugerido:** `service_kw9k4dj`

### 3. Crear Template de Email
1. Ve a **"Email Templates"**
2. Haz clic en **"Create New Template"**
3. **ID del template sugerido:** `template_84pxqlk`
4. Usa este contenido para el template:

```
Subject: 🌟 Nuevo Mensaje de Agradecimiento - {{student_name}}

Hola Angela,

¡Tienes un nuevo mensaje de agradecimiento!

👨‍👩‍👧‍👦 Familia: {{from_name}}
👶 Estudiante: {{student_name}}
📅 Fecha: {{date}} a las {{time}}

💬 Mensaje:
{{message}}

---
Este mensaje fue enviado desde tu sitio web de recursos matemáticos.

¡Sigue haciendo la diferencia en la educación! 🎓✨
```

### 4. Obtener las Claves
1. Ve a **"Account"** → **"General"**
2. Copia tu **Public Key**
3. Reemplaza en el código: `LvFX8gDwPjz_6m8Kt` por tu clave real

### 5. Configuración Final
- El código ya está configurado para usar:
  - **Service ID:** `service_kw9k4dj`
  - **Template ID:** `template_84pxqlk`
  - **Tu email:** `angelapineda980@gmail.com` (oculto en el código)

## 🔒 Seguridad
- Tu email está **completamente oculto** del usuario
- Los mensajes llegan directamente a tu bandeja de entrada
- EmailJS es gratuito hasta 200 emails/mes

## ✅ ¿Cómo Saber que Funciona?
Cuando alguien envíe un agradecimiento:
1. Verá un mensaje "Sending your message..."
2. Luego "Your message has been sent to Angela! 💖"
3. **TÚ recibirás el email inmediatamente**

## 🆘 Si Hay Problemas
- Verifica que los IDs del servicio y template coincidan
- Asegúrate de que Gmail esté bien conectado
- Revisa la consola del navegador para errores

¡Listo! Ahora todos los agradecimientos llegarán directamente a tu email sin que nadie vea tu dirección. 📧✨