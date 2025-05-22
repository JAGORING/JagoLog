import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

interface CardHeaderProps {
  title: string;
  period: string;
}

interface CardBodyProps {
  description: string | string[];
  extraInfo?: React.ReactNode;
  subInfo?: React.ReactNode;
}

const Card: React.FC<CardProps> & {
  Header: React.FC<CardHeaderProps>;
  Body: React.FC<CardBodyProps>;
} = ({ children, className = '', ...props }) => {
  return (
    <div className={`shadow-sm rounded-md p-6 transition shadow-subcolor ${className}`} {...props}>
      {children}
    </div>
  );
};

const CardHeader: React.FC<CardHeaderProps> = ({ title, period }) => (
  <div className="flex justify-between items-center mb-4 border-b border-subcolor pb-2">
    <h3 className="text-xl font-bold">{title}</h3>
    <span className="text-sm text-subcolor">{period}</span>
  </div>
);

const CardBody: React.FC<CardBodyProps> = ({ description, extraInfo, subInfo }) => (
  <div>
    {extraInfo && <div className="mb-1 text-md">{extraInfo}</div>}
    {subInfo && <div className="mb-1 text-sm text-subcolor">{subInfo}</div>}

    <div>
      {typeof description !== 'string' ? (
        <ul className="mb-6">
          {description.map((line, index) => (
            <li key={index} className="leading-relaxed text-base">
              {line.trim()}
            </li>
          ))}
        </ul>
      ) : (
        <p className="leading-relaxed text-base">{description.trim()}</p>
      )}
    </div>
  </div>
);

Card.Header = CardHeader;
Card.Body = CardBody;

export { Card };
