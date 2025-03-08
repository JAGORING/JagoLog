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
}

const Card: React.FC<CardProps> & {
  Header: React.FC<CardHeaderProps>;
  Body: React.FC<CardBodyProps>;
} = ({ children, className = '', ...props }) => {
  return (
    <div className={`shadow-md rounded-lg p-6 transition hover:shadow-lg ${className}`} {...props}>
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

const CardBody: React.FC<CardBodyProps> = ({ description, extraInfo }) => (
  <div>
    {extraInfo && <div className="mb-1 text-md text-subcolor">{extraInfo}</div>}

    <div>
      {typeof description !== 'string' ? (
        <ul className="mb-6">
          {description.map((line, index) => (
            <li key={index} className="leading-relaxed text-base text-accent-foreground">
              {line.trim()}
            </li>
          ))}
        </ul>
      ) : (
        <p className="leading-relaxed text-base text-accent-foreground">{description.trim()}</p>
      )}
    </div>
  </div>
);

Card.Header = CardHeader;
Card.Body = CardBody;

export { Card };
