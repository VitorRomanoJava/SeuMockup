// mockup-canvas-craft-03-main/src/pages/MockupGenerator.tsx

// ... outras importações
import { MockupCanvas3D } from "@/components/3d/MockupCanvas3D"; // Adicione esta linha

// mockup-canvas-craft-03-main/src/pages/MockupGenerator.tsx

// ... dentro do return do componente MockupGenerator

{/* Coluna da direita - Visualização do Mockup */}
<div className="col-span-12 lg:col-span-7 xl:col-span-8 flex items-center justify-center p-4">
  <div className="w-full max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] aspect-square">
    {/*
      AQUI ESTÁ A MUDANÇA:
      Removemos a div com a imagem 2D e o container de personalização
      e colocamos o nosso novo componente de canvas 3D no lugar.
    */}
    <MockupCanvas3D />
  </div>
</div>

// ... resto do código