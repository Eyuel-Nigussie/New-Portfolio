"use client"
import Rive from '@rive-app/react-canvas'

export default function Loading() {
  return (
    <div className='flex items-center justify-center h-100vh'>
     {/* <Rive src="robot.riv"  style={{ width: 200, height: 200 }} stateMachines="State Machine 1"/> */}
      <div className="relative w-24 h-24 mb-8">
        <div className="absolute w-full h-full border-8 border-muted rounded-full"></div>
        <div className="absolute w-full h-full border-t-8 border-primary rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 bg-primary rounded-full animate-pulse"></div>
        </div>
      </div>
      <div className="w-48 h-2 bg-muted rounded-full overflow-hidden">
        <div className="h-full bg-primary animate-[loading_2s_ease-in-out_forwards]"></div>
      </div>
    </div>
  );
}