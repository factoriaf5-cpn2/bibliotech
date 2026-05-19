# Bibliotech - Tutorial: Componentes en Angular

## 📚 Introducción

**Bibliotech** es una aplicación educativa de ejemplo que demuestra cómo crear y gestionar componentes en **Angular 21**. En este tutorial, aprenderás a:

- Crear componentes reutilizables con Angular CLI
- Definir interfaces TypeScript para tipado fuerte
- Trabajar con datos mock (datos falsos) en componentes
- Integrar componentes en la aplicación principal
- Usar Conventional Commits para versionado semántico

---

## 🎯 Objetivos de Aprendizaje

Al completar este tutorial, comprenderás:

✅ Estructura de un proyecto Angular moderno  
✅ Cómo generar componentes con Angular CLI  
✅ TypeScript: interfaces y tipos de datos  
✅ Integración de componentes en templates  
✅ Buenas prácticas de versionado con Git

---

## 📋 Prerrequísitos

- Node.js v18+ instalado
- pnpm o npm como gestor de paquetes
- Angular CLI v21.2.7+
- Conocimientos básicos de TypeScript y componentes Angular

```bash
# Instalar Angular CLI globalmente (si no lo tienes)
npm install -g @angular/cli
```

---

## 🚀 Paso a Paso: Replicar esta Rama

### **Paso 1: Clonar e Instalar Dependencias**

```bash
git clone <tu-repositorio>
cd bibliotech
pnpm install
```

### **Paso 2: Generar el Componente CustomerList**

Usa Angular CLI para generar el componente de forma automática:

```bash
ng generate component features/customer
```

Esto creará automáticamente:

- `src/app/features/customer/customer-list/customer-list.ts` (componente)
- `src/app/features/customer/customer-list/customer-list.html` (template)
- `src/app/features/customer/customer-list/customer-list.css` (estilos)
- `src/app/features/customer/customer-list/customer-list.spec.ts` (pruebas)

### **Paso 3: Definir la Interfaz CustomerItem**

En `src/app/features/customer/customer-list/customer-list.ts`, añade la interfaz que define la estructura de un cliente:

```typescript
export interface CustomerItem {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  loyalty: 'Bronze' | 'Silver' | 'Gold' | 'Platinum' | 'VIP';
  state: boolean;
  image: string;
}
```

**¿Por qué una interfaz?** Proporciona tipado TypeScript fuerte y autocompletado en el IDE.

### **Paso 4: Agregar Datos Mock al Componente**

En la clase `Customer`, añade un array con 10 clientes de ejemplo:

```typescript
export class Customer {
  customers: CustomerItem[] = [
    {
      fullName: 'Emma Johnson',
      email: 'emma.johnson@example.com',
      phone: '+1-555-0123',
      address: '123 Maple St, Springfield, IL',
      loyalty: 'Gold',
      state: true,
      image: 'https://i.pravatar.cc/150?img=1',
    },
    // ... más clientes ...
  ];
}
```

**Nota**: Se incluyeron todos los niveles de lealtad: Bronze, Silver, Gold, Platinum, VIP.

### **Paso 5: Importar el Componente en la App Principal**

Edita `src/app/app.ts`:

```typescript
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomerList } from './features/customer/customer-list/customer-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CustomerList], // ← Añade CustomerList al array imports
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
```

### **Paso 6: Usar el Componente en el Template**

En `src/app/app.html`, añade el componente:

```html
<app-customer-list /> <router-outlet />
```

---

## 🎮 Ejecutar el Proyecto

### Iniciar servidor de desarrollo

```bash
pnpm start
```

o alternativamente:

```bash
ng serve
```

La aplicación estará disponible en [http://localhost:4200](http://localhost:4200). Se recargará automáticamente al modificar archivos.

### Ejecutar pruebas unitarias

```bash
pnpm test
```

### Compilar para producción

```bash
ng build
```

Los artefactos se guardarán en el directorio `dist/`.

---

## 📚 Conceptos Clave

### 1. **Componentes Angular**

Los componentes son la unidad básica de Angular. Combinan lógica TypeScript, templates HTML y estilos CSS.

### 2. **Interfaces TypeScript**

Las interfaces definen la estructura y tipos de los datos, proporcionando autocompletado y validación de tipos en tiempo de compilación.

### 3. **Datos Mock**

En desarrollo, usamos datos falsos (mock) para probar la UI sin depender de un backend real.

### 4. **Árbol de Componentes**

Los componentes se importan y se integran en otros componentes, creando una estructura jerárquica.

### 5. **Conventional Commits**

Mensajes de commit estructurados (`feat:`, `fix:`, `docs:`, etc.) que facilitan la lectura del historial de cambios.

---

## 📝 Estructura del Proyecto

```
src/
├── app/
│   ├── app.ts                 (componente raíz)
│   ├── app.html               (template principal)
│   ├── app.routes.ts          (configuración de rutas)
│   └── features/
│       └── customer/          (componente CustomerList)
│           └── customer-list/
│               ├── customer-list.ts
│               ├── customer-list.html
│               ├── customer-list.css
│               └── customer-list.spec.ts
├── main.ts                    (punto de entrada)
└── styles.css                 (estilos globales)
```

---

## 🐛 Troubleshooting

**Error: "Cannot find module"**

- Asegúrate de tener todas las dependencias instaladas: `pnpm install`
- Verifica las rutas de importación en los archivos TypeScript

**El componente no aparece en la UI**

- Comprueba que `CustomerList` está importado en `app.ts`
- Verifica que está añadido en el array `imports` del decorador `@Component`
- Asegúrate de que la etiqueta `<app-customer-list/>` está en `app.html`

**Error de sintaxis TypeScript**

- Revisa el archivo para asegurar la interfaz está correctamente definida
- Ejecuta `ng lint` para verificar problemas de código

---

## 🎓 Ejercicios Propuestos

1. **Mostrar datos en la UI**: Usa `@for` en el template para iterar sobre el array `customers`
2. **Filtrado**: Implementa un método para filtrar clientes por nivel de lealtad
3. **Búsqueda**: Crea un input para buscar clientes por nombre
4. **Componente hijo**: Crea un sub-componente `CustomerCard` para mostrar cada cliente individualmente

---

## 📖 Recursos Adicionales

- [Angular Documentation](https://angular.dev)
- [Angular CLI Guide](https://angular.dev/tools/cli)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Conventional Commits](https://www.conventionalcommits.org/)

---

## 📄 Licencia

Este proyecto es educativo. Siéntete libre de modificarlo y adaptarlo a tus necesidades.
