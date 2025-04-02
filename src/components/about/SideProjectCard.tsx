'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Modal from '../ui/modal';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { ProjectDetailItem } from './ProjectDetailItem';

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
              <div key={tech} className="text-xs font-semibold bg-pointColor px-2 py-1 rounded-md">
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
            <span className="text-sm text-subcolor">개발 기간: {project.period}</span>
            <div className="text-xs text-accent-foreground mt-1">프로젝트 형태: {project.type}</div>
          </div>
        </Modal.Header>

        <Modal.Body>
          {project.details.images?.length > 0 && (
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

          {project.demoSite && (
            <div className="my-4">
              <Link href={project.demoSite} target="_blank">
                <Button size="sm" variant="outline">
                  Demo
                </Button>
              </Link>
            </div>
          )}

          <div className="space-y-6 mt-4">
            <ProjectDetailItem title="📌 프로젝트 개요" content={project.details.purpose} />
            <ProjectDetailItem title="💡 주요 목표" list={project.details.goals} />
            <ProjectDetailItem title="🔧 주요 기능" list={project.details.features} />
            <ProjectDetailItem title="👩🏻‍💻 담당 역할" list={project.details.roles} />
            <ProjectDetailItem title=" ✨ 개발자로서의 성장 포인트" list={project.details.highlights} />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SideProjectCard;
