import SideProjectCard from '@/components/about/SideProjectCard';
import { Card } from '@/components/ui/card';
import { RESUME_DATA, SIDE_PROJECT } from '@/config/about_resume';
import Link from 'next/link';

const About = () => {
  return (
    <div className="container mx-auto space-y-12 mt-3">
      <section className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
        <div className="flex-1">
          <h1 className="text-4xl font-bold">{RESUME_DATA.name}</h1>
          <p className="mt-4 max-w-2xl lg:whitespace-pre">{RESUME_DATA.about}</p>

          <div className="mt-4 space-x-4">
            {RESUME_DATA.contact.social.map((social) => (
              <Link
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-subcolor underline-offset-4 hover:text-pointColor hover:underline"
              >
                {social.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-5">경력 사항</h2>
        <div className="grid gap-6">
          <Card>
            <Link href={'https://bizwizsystem.co.kr/'} target="_blank">
              <Card.Header title="비즈위즈시스템" period="2022.08 ~ 2025.02" />
            </Link>
            {RESUME_DATA.works.map((work) => (
              <Card.Body
                key={work.company}
                extraInfo={
                  <>
                    {work.company}
                    <span className="text-xs ml-1">
                      ({work.start} ~ {work.end})
                    </span>
                  </>
                }
                subInfo={work.desc}
                description={work.points}
              />
            ))}
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-5">학력</h2>
        <div className="grid gap-6">
          <Card>
            <Card.Header title={RESUME_DATA.education.school} period={RESUME_DATA.education.period} />
            <Card.Body extraInfo={<>{RESUME_DATA.education.degree}</>} description={RESUME_DATA.education.grade} />
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-5">교육 및 자격증</h2>
        <div className="grid gap-6">
          {RESUME_DATA.Certifications.map((cert) => (
            <Card key={cert.title}>
              <Card.Header title={cert.title} period={cert.period} />
              <Card.Body description={cert.points} />
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-5">사이드 프로젝트</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {SIDE_PROJECT.map((project, index) => (
            <SideProjectCard key={index} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
};
export default About;
