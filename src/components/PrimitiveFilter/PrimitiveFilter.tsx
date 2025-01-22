import React, { FC } from 'react';
import './PrimitiveFilter.css';
interface PrimitiveFilterProps {
  title: string;
  names: string[];
  chosenFilter: string;
  onChange: (val: string) => void;
}
export const PrimitiveFilter: FC<PrimitiveFilterProps> = ({
  title,
  names,
  chosenFilter,
  onChange,
}) => {
  return (
    <div className="primitive-filter-container">
      <label>{title}</label>
      <div className="primitive-filter">
        {names.map((filterVal, index) => (
          <>
            <p
              onClick={() => onChange(filterVal)}
              className={
                filterVal === chosenFilter ? 'chosen-text' : 'regular-text'
              }
            >
              {filterVal}
            </p>
            {index !== names.length - 1 && <p> | </p>}
          </>
        ))}
      </div>
    </div>
  );
};
