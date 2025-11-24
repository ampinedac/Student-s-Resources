# 📝 Instrucciones para Subir Cambios a GitHub Pages

## ✅ Cambios Realizados

Se corrigieron las rutas de las imágenes para que funcionen correctamente tanto en local como en GitHub Pages:

- ✅ `third-grade.html` - Rutas de iconos corregidas
- ✅ `index.html` - Rutas de iconos corregidas  
- ✅ `first-grade.html` - Rutas de iconos corregidas
- ✅ `second-grade.html` - Rutas de iconos corregidas

## 🚀 Cómo Subir los Cambios

### Opción 1: GitHub Desktop (Recomendado - Más Fácil)

1. **Descarga e instala GitHub Desktop** si no lo tienes:
   - Ve a: https://desktop.github.com/
   - Descarga e instala

2. **Abre GitHub Desktop**

3. **Agrega el repositorio:**
   - File > Add Local Repository
   - Selecciona la carpeta: `C:\Users\angela.pc\OneDrive - Gimnasio Femenino\Documentos\My own web site\Student-s-Resources`

4. **Verás los cambios en la pestaña "Changes"**

5. **Haz commit:**
   - Escribe un mensaje como: "Fix image paths for GitHub Pages"
   - Click en "Commit to main"

6. **Sube los cambios:**
   - Click en "Push origin" (arriba a la derecha)

7. **Espera 1-2 minutos** y actualiza tu página de GitHub Pages

---

### Opción 2: Línea de Comandos (Si instalas Git)

1. **Instala Git:**
   - Ve a: https://git-scm.com/download/win
   - Descarga e instala

2. **Abre PowerShell en la carpeta del proyecto**

3. **Ejecuta estos comandos:**

```powershell
# Agregar los cambios
git add .

# Hacer commit
git commit -m "Fix image paths for GitHub Pages"

# Subir a GitHub
git push origin main
```

---

### Opción 3: Subir Manualmente (Sin instalar nada)

1. **Ve a tu repositorio en GitHub:**
   - https://github.com/TU-USUARIO/Student-s-Resources

2. **Para cada archivo modificado:**
   - Navega hasta el archivo en GitHub
   - Click en el ícono del lápiz (Edit)
   - Copia y pega el contenido del archivo local
   - Scroll abajo y click en "Commit changes"

3. **Archivos a actualizar:**
   - `third-grade.html`
   - `index.html`
   - `first-grade.html`
   - `second-grade.html`

---

## 🔍 Verificar que Funcionó

Después de subir los cambios:

1. Espera 1-2 minutos
2. Ve a tu sitio: `https://TU-USUARIO.github.io/Student-s-Resources/`
3. Abre la consola del navegador (F12)
4. Verifica que no haya errores de carga de recursos
5. Prueba los botones para abrir los recursos

---

## ❓ ¿Cuál era el problema?

El problema era que las rutas de las imágenes de los iconos de idioma estaban configuradas como:
- ❌ `src="en-icon.svg"` (busca en la raíz)
- ❌ `src="colombia-icon.svg"` (busca en la raíz)

Pero las imágenes están en la carpeta `images/`, entonces ahora están:
- ✅ `src="images/en-icon.svg"` (encuentra el archivo correctamente)
- ✅ `src="images/colombia-icon.svg"` (encuentra el archivo correctamente)

Con el `<base>` tag que ya tenías configurado, todas las rutas relativas ahora funcionan correctamente tanto local como en GitHub Pages.

---

## 📞 ¿Necesitas Ayuda?

Si tienes problemas:
1. Verifica que las imágenes existan en `images/`
2. Verifica que el sitio esté publicado en GitHub Pages (Settings > Pages)
3. Limpia la caché del navegador (Ctrl + Shift + R)
4. Revisa la consola del navegador (F12) para ver errores específicos
