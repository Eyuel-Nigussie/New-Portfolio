"use client"
import Rive from '@rive-app/react-canvas'

export default function Loading() {
  return (
    <div className='flex items-center justify-center h-100vh bg-background'>
      <Rive src="robot.riv"  style={{ width: 200, height: 200 }} stateMachines="State Machine 1"/> */
    </div>
  );
}