import React from 'react'

interface TabsContainerProps {

}

export const TabsContainer: React.FC<TabsContainerProps> = ({}) => {
    return (
      <div className="w-full bg-amber-200/80 grid grid-cols-3">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
    );
}