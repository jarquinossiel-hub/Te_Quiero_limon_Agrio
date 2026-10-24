function showModule(moduleId, button) {
  
  document.querySelectorAll('.module').forEach(mod => mod.classList.remove('active'));

  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));

  document.getElementById(moduleId).classList.add('active');

  button.classList.add('active');

  const titles = {
    'inicio': 'Panel de Control',
    'cliente': 'Manejo de clientes',
    'inventario': 'Gestión de Inventario y Productos',
    'ventas': 'Módulo de Registro de Ventas'
  };

  document.getElementById('page-title').innerText = titles[moduleId];
}