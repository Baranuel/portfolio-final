"use client";
import { ProjectItem } from "./ProjectItem";
import { ProjectWithObjectives } from "../../../../prisma/types";
import { useCallback, useState } from "react";
import { ProjectPreview } from "./ProjectPreview";
import Image from "next/image";
import { ProjectPreviewInPortal } from "./ProjectPreviewInPortal";
import { AnimatePresence } from "framer-motion";

type ProjectListProps = {
  projects: ProjectWithObjectives[] | undefined;
};

export const ProjectList = ({ projects }: ProjectListProps) => {
  const [previewProject, setPreviewProject] = useState<
    ProjectWithObjectives | undefined
  >(undefined);

  const handlePreviewProject = useCallback(
    (project: ProjectWithObjectives) => {
      setPreviewVisible(true);
      setPreviewProject(project);
    }, [])

  const [previewVisible, setPreviewVisible] = useState(false);

  return (
    <>
      {projects?.map((project, index: number) => {
        const image =  <Image
        loading="eager"
        quality={100}
        src={project.image}
        priority
        alt={project.title}
        fill
        sizes='1200px 1200px'
        className="rounded-xl object-cover bg-center shadow-xl "
      />

        return (
          <ProjectItem
            handlePreviewProject={handlePreviewProject}
            project={project}
            preloadedImage={image}
            key={index}
          />
        );
      })}


<AnimatePresence>
        {previewVisible &&  (
        <ProjectPreviewInPortal>
          <ProjectPreview
            project={previewProject}
            setPreviewProject={() => setPreviewVisible(false)}
          />
        </ProjectPreviewInPortal>
          )}
          </AnimatePresence>

    </>
  );
};
