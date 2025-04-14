import React from 'react'

const WorkFlowCard = ({id, title, description, steps, likes, comments}: WorkFlowProps) => {
  return (
    <div>
      <div className='card-border w-[360px] max-sm:w-full min-h-96'>
        <div>
          <div>
            <p>{title}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkFlowCard