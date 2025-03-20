'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Modal from '../ui/modal';
import { Card } from '../ui/card';

interface SideProjectCardProps extends SideProject {}

const SideProjectCard: React.FC<SideProjectCardProps> = (project) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setModalOpen(true)}
        className="cursor-pointer transition-transform duration-300 hover:scale-105"
      >
        <Card className="h-full">
          <Card.Header title={project.title} period={project.period} />
          <div className="flex flex-wrap gap-2 mb-3">
            {project.details.techs.map((tech) => (
              <div className="text-xs font-semibold bg-pointColor text-white px-2 py-1 rounded-md" key={tech}>
                {tech}
              </div>
            ))}
          </div>
          <Card.Body
            description={project.description}
            extraInfo={<span className="text-xs text-gray-400">자세히 보기 &rarr;</span>}
          />
        </Card>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <Modal.Header onClose={() => setModalOpen(false)}>
          <div>
            <h3 className="text-xl font-bold">{project.title}</h3>
            <span className="text-sm text-subcolor">{project.period}</span>
          </div>
        </Modal.Header>
        <Modal.Body>
          {project.details.images && project.details.images.length > 0 && (
            <div className="flex overflow-x-auto gap-3 py-2">
              {project.details.images.map((img, idx) => (
                <Image
                  key={idx}
                  src={img}
                  alt={`${project.title} 이미지 ${idx + 1}`}
                  width={300}
                  height={200}
                  className="rounded-md object-cover"
                />
              ))}
            </div>
          )}
          <div className="space-y-4 mt-2">
            <div>
              <h4 className="text-xl font-semibold">목적</h4>
              <p className="text-accent-foreground">{project.details.purpose}</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold">사용 기술</h4>
              <p className="text-accent-foreground">{project.details.techs.join(', ')}</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold">주요 구현 기능</h4>
              <ul>
                {project.details.features.map((line, index) => (
                  <li key={index} className="text-accent-foreground leading-relaxed text-base">
                    {line.trim()}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SideProjectCard;
