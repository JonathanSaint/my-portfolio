import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeScene = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    shapes: THREE.Mesh[];
    animationId: number;
  } | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Create glowing materials
    const cyanMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ffff,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });

    const purpleMaterial = new THREE.MeshBasicMaterial({
      color: 0xaa55ff,
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });

    // Create shapes
    const shapes: THREE.Mesh[] = [];

    // Icosahedron
    const icosahedron = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.5, 1),
      cyanMaterial
    );
    icosahedron.position.set(-3, 1, -2);
    scene.add(icosahedron);
    shapes.push(icosahedron);

    // Torus
    const torus = new THREE.Mesh(
      new THREE.TorusGeometry(1, 0.3, 16, 100),
      purpleMaterial
    );
    torus.position.set(3, -1, -3);
    scene.add(torus);
    shapes.push(torus);

    // Octahedron
    const octahedron = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.8, 0),
      cyanMaterial
    );
    octahedron.position.set(0, 2, -4);
    scene.add(octahedron);
    shapes.push(octahedron);

    // Dodecahedron
    const dodecahedron = new THREE.Mesh(
      new THREE.DodecahedronGeometry(0.6, 0),
      purpleMaterial
    );
    dodecahedron.position.set(-2, -2, -3);
    scene.add(dodecahedron);
    shapes.push(dodecahedron);

    // Tetrahedron
    const tetrahedron = new THREE.Mesh(
      new THREE.TetrahedronGeometry(0.7, 0),
      cyanMaterial
    );
    tetrahedron.position.set(2.5, 2, -2);
    scene.add(tetrahedron);
    shapes.push(tetrahedron);

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 500;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 20;
    }

    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(posArray, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0x00ffff,
      transparent: true,
      opacity: 0.8,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation
    const animate = () => {
      const animationId = requestAnimationFrame(animate);

      // Rotate shapes
      shapes.forEach((shape, index) => {
        shape.rotation.x += 0.003 + index * 0.001;
        shape.rotation.y += 0.005 + index * 0.001;
        shape.position.y += Math.sin(Date.now() * 0.001 + index) * 0.002;
      });

      // Rotate particles
      particles.rotation.y += 0.0005;
      particles.rotation.x += 0.0002;

      // Camera follows mouse slightly
      camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
      sceneRef.current = { scene, camera, renderer, shapes, animationId };
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (sceneRef.current) {
        cancelAnimationFrame(sceneRef.current.animationId);
      }
      renderer.dispose();
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ background: 'linear-gradient(180deg, hsl(220, 20%, 4%) 0%, hsl(220, 25%, 8%) 50%, hsl(220, 20%, 4%) 100%)' }}
    />
  );
};

export default ThreeScene;
