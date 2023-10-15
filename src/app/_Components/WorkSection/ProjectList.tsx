"use client";
import { ProjectItem } from "./ProjectItem";
import { ProjectWithObjectives } from "../../../../prisma/types";
import { useState } from "react";
import { ProjectPreview } from "./ProjectPreview";

import { ProjectPreviewInPortal } from "./ProjectPreviewInPortal";
import { AnimatePresence } from "framer-motion";

type ProjectListProps = {
  projects: ProjectWithObjectives[] | undefined;
};

export const ProjectList = ({ projects }: ProjectListProps) => {
  const [previewProject, setPreviewProject] = useState<
    ProjectWithObjectives | undefined
  >(undefined);

  const handlePreviewProject = (project: ProjectWithObjectives) => {
    setPreviewVisible(true);
    setPreviewProject(project);
  };

  const [previewVisible, setPreviewVisible] = useState(false);

  return (
    <>
      {projects?.map((project, index: number) => {
        return (
          <ProjectItem
            handlePreviewProject={handlePreviewProject}
            project={project}
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
