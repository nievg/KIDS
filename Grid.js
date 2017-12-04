class Grid{
	
	drawY(context, step = 10, width = 1, color = '#333'){
		context.beginPath();
		for(var i  = 0;
				i <= context.canvas.width;
				i += step)
		{
				context.moveTo(i, 0);
				context.lineTo(i, context.canvas.height);
		}
		context.strokeStyle = color;
		context.lineWidth = width;
		context.stroke();
	}
	
	drawX(context, step = 10, width = 1, color = '#333'){
		context.beginPath();	
		for(var i  = step;
				i <= context.canvas.height;
				i += step)
		{
				context.moveTo(0, i);
				context.lineTo(context.canvas.width, i);
		}
		context.strokeStyle = color;
		context.lineWidth = width;
		context.stroke();
	}
	
	drawXY(context, step = 10, width = 1, color = '#333'){
		this.drawX(ctx, step, width, color);
		this.drawY(ctx, step, width, color);
	}

}