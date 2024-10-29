
export const getRandomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


export const calculateSpawnPosition = (canvas: HTMLCanvasElement) => {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const spawnRangeX = canvas.width; // Full screen width
    const spawnRangeY = canvas.height * 0.9; // 60% of screen height

    // Generate random position within range of center
    let x = centerX + (Math.random() - 0.5) * spawnRangeX;
    let y = centerY + (Math.random() - 0.5) * spawnRangeY;

    // Create dead zone in center (40% of screen dimensions)
    const deadZoneX = canvas.width * 0.1;
    const deadZoneY = canvas.height * 0.1;
    
    // If position is in dead zone, push it outside
    if (Math.abs(x - centerX) < deadZoneX / 2) {
      x = x < centerX ? 
        centerX - deadZoneX / 2 - Math.random() * (canvas.width / 4) : 
        centerX + deadZoneX / 2 + Math.random() * (canvas.width / 4);
    }
    if (Math.abs(y - centerY) < deadZoneY / 2) {
      y = y < centerY ? 
        centerY - deadZoneY / 2 - Math.random() * (canvas.height / 4) : 
        centerY + deadZoneY / 2 + Math.random() * (canvas.height / 4);
    }

    // Add small random offset to prevent exact overlaps
    x += Math.random() * 10 - 5; // Add random offset between -5 and 5
    y += Math.random() * 10 - 5; // Add random offset between -5 and 5

    // Ensure particles stay within canvas bounds after offset
    x = Math.max(0, Math.min(x, canvas.width));
    y = Math.max(0, Math.min(y, canvas.height));

    return { x, y };
}

  // Set canvas dimensions accounting for device pixel ratio
export const updateCanvasSize = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    if(typeof window === 'undefined') return;
    
    const pixelRatio = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    
    canvas.width = rect.width * pixelRatio;
    canvas.height = rect.height * pixelRatio;
    
    // Scale the context to ensure correct drawing dimensions
    ctx.scale(pixelRatio, pixelRatio);
};

