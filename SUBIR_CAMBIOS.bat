@echo off
cd /d "%~dp0"

echo ================================================
echo   SUBIR CAMBIOS A GITHUB
echo ================================================
echo.

REM Verificar si Git está instalado
where git >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Git no está instalado.
    echo.
    echo Por favor instala Git desde: https://git-scm.com/download/win
    echo.
    echo O usa GitHub Desktop: https://desktop.github.com/
    echo.
    pause
    exit /b 1
)

if not exist .git (
    echo [ERROR] Esta carpeta no es un repositorio Git.
    echo Abre la carpeta correcta del repositorio y vuelve a ejecutar este archivo.
    echo.
    pause
    exit /b 1
)

echo [1/3] Agregando archivos modificados...
git add .

echo.
echo [2/3] Creando commit...
git commit -m "Update site resources and PDF links"

if %errorlevel% neq 0 (
    echo [INFO] No hay cambios nuevos para hacer commit.
)

echo.
echo [3/3] Subiendo a GitHub...
git push origin main

echo.
echo ================================================
echo   ¡CAMBIOS SUBIDOS EXITOSAMENTE!
echo ================================================
echo.
echo Tu sitio se actualizará en 1-2 minutos en:
echo https://ampinedac.github.io/Student-s-Resources/
echo.
pause
