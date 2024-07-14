import React, { FC, ReactNode } from 'react'

interface SimpleCellProps {
  before?: ReactNode;
  header?: ReactNode;
  mode?: string;
  children: ReactNode;
}

const SimpleCell: FC<SimpleCellProps> = ({ before, header, children, mode }) => {
  return (
    <div className={`flex space-x-2 mb-4 ${mode === 'white' ? 'text-white' : null}`}>
      {before ?
        <div>
          {before}
        </div>
        : null
      }
      <div >
        {header ?
          <div className='pb-2'>
            {header}
          </div>
          :null
        }
        {children}
      </div>
    </div>
  );
}

export default SimpleCell