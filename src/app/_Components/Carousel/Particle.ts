export class Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
    color: string;
    size: number;
    initialX: number;
  
    constructor(x: number, y: number, color: string) {
      this.initialX = x;
      this.x = x - 1
      this.y = y;
      // Randomize initial velocity based on distance from center
      const distanceMultiplier = Math.random() * 0.3 + 0.1; // Slower near center
      this.vx = (Math.random() + 0.2) * distanceMultiplier * 3 / 1.5;
      this.vy = (Math.random() - 0.5) * 0.003;
      this.life = 500;
      this.color = color;
      this.size = Math.floor(Math.random() * 2.5) + 1.5;
    }
  
    draw(ctx: CanvasRenderingContext2D) {
      // ctx.globalCompositeOperation = 'lighter'

      ctx.fillStyle = this.color;
      ctx.fillRect(
        Math.floor(this.x), 
        Math.floor(this.y), 
        this.size, 
        this.size
      );
  

    }
  
    update(deltaTime: number) {
      // Slower acceleration for particles closer to center
      const distanceFromCenter = Math.abs(this.x - this.initialX);
      const accelerationFactor = Math.min(1, distanceFromCenter / 100);
      
      this.vx += deltaTime * 0.003 * accelerationFactor;
      this.vy += (Math.random() - 0.5) * deltaTime * 0.002;
      this.x += this.vx - 0.1;
      this.y += this.vy;
      this.life -= deltaTime;
    }
  }