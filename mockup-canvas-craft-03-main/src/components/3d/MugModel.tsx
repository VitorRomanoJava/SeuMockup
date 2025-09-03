// src/components/3d/MugModel.tsx
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

// Interface para definir os tipos do modelo GLTF
// Isso nos dá autocompletar e segurança de tipo ao acessar os nós do modelo.
interface GLTFResult {
  nodes: {
    [name: string]: THREE.Mesh; // Assumimos que todos os nós são malhas (Meshes)
  };
  materials: {
    [name: string]: THREE.Material;
  };
}

export function MugModel(props: JSX.IntrinsicElements['group']) {
  // O hook useGLTF carrega o modelo 3D de forma otimizada.
  // Ele usa o Suspense do React para lidar com o tempo de carregamento.
  const { nodes, materials } = useGLTF('/models/mug.glb') as unknown as GLTFResult;

  // IMPORTANTE: A estrutura do seu modelo 3D pode ser diferente.
  // Para descobrir os nomes corretos de `nodes` e `materials`, você pode adicionar
  // um `console.log(nodes)` aqui e inspecionar o objeto no console do navegador.
  // Neste exemplo, estou assumindo que o modelo tem um objeto principal chamado "Mug"
  // e um material chamado "MugMaterial". Você DEVE ajustar esses nomes
  // para corresponderem aos nomes exatos do seu arquivo .glb.
  const mugNode = nodes.Mug || Object.values(nodes)[0]; // Tenta encontrar 'Mug' ou pega o primeiro nó disponível.
  const mugMaterial = materials.MugMaterial || Object.values(materials)[0]; // Tenta encontrar 'MugMaterial' ou pega o primeiro.

  if (!mugNode) {
    console.error("Não foi possível encontrar um nó de malha válido no modelo 3D.");
    return null; // Não renderiza nada se o modelo não tiver a estrutura esperada.
  }

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={mugNode.geometry}
        material={mugMaterial}
        scale={2} // Ajuste a escala conforme necessário para o seu modelo
        rotation={[0, -Math.PI / 2, 0]} // Ajuste a rotação inicial se precisar
      />
    </group>
  );
}

// Pré-carrega o modelo em segundo plano para uma experiência de usuário mais rápida.
useGLTF.preload('/models/mug.glb');