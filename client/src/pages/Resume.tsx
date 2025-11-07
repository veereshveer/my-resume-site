import { Mail, Phone, Linkedin, MapPin, Download, Moon, Sun, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useTheme } from "@/components/ThemeProvider";
import { resumeData } from "@/data/resumeData";

export default function Resume() {
  const { theme, toggleTheme } = useTheme();

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Action Bar - Hidden in print */}
      <div className="print:hidden sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-lg font-semibold">Resume</h1>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              data-testid="button-theme-toggle"
            >
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handlePrint}
              data-testid="button-print"
            >
              <Printer className="h-4 w-4 mr-2" />
              Print
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={handleDownload}
              data-testid="button-download"
            >
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </div>
      </div>

      {/* Resume Content */}
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="space-y-6">
          {/* Header Section */}
          <Card className="print:shadow-none print:border-0">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold tracking-tight" data-testid="text-name">
                  {resumeData.contact.name}
                </h1>
                <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
                  <a
                    href={`mailto:${resumeData.contact.email}`}
                    className="flex items-center gap-2 hover-elevate px-2 py-1 rounded-md transition-colors"
                    data-testid="link-email"
                  >
                    <Mail className="h-4 w-4" />
                    {resumeData.contact.email}
                  </a>
                  <Separator orientation="vertical" className="h-4" />
                  <a
                    href={`tel:${resumeData.contact.phone}`}
                    className="flex items-center gap-2 hover-elevate px-2 py-1 rounded-md transition-colors"
                    data-testid="link-phone"
                  >
                    <Phone className="h-4 w-4" />
                    {resumeData.contact.phone}
                  </a>
                  <Separator orientation="vertical" className="h-4" />
                  <a
                    href={`https://linkedin.com/in/${resumeData.contact.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover-elevate px-2 py-1 rounded-md transition-colors"
                    data-testid="link-linkedin"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                  {resumeData.contact.location && (
                    <>
                      <Separator orientation="vertical" className="h-4" />
                      <span className="flex items-center gap-2" data-testid="text-location">
                        <MapPin className="h-4 w-4" />
                        {resumeData.contact.location}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Career Objective */}
          <Card className="print:shadow-none print:border-0">
            <CardHeader>
              <CardTitle className="text-xl">Career Objective</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed" data-testid="text-objective">
                {resumeData.objective}
              </p>
            </CardContent>
          </Card>

          {/* Professional Summary */}
          <Card className="print:shadow-none print:border-0">
            <CardHeader>
              <CardTitle className="text-xl">Professional Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {resumeData.professionalSummary.map((item, index) => (
                  <li key={index} className="text-sm flex gap-3" data-testid={`text-summary-${index}`}>
                    <span className="text-primary mt-1.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Experience */}
          <Card className="print:shadow-none print:border-0">
            <CardHeader>
              <CardTitle className="text-xl">Professional Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {resumeData.experience.map((exp, index) => (
                  <div key={exp.id} className={index > 0 ? "pt-6 border-t" : ""} data-testid={`card-experience-${exp.id}`}>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <div>
                        <h3 className="font-semibold text-base" data-testid={`text-role-${exp.id}`}>
                          {exp.role}
                        </h3>
                        <p className="text-sm text-muted-foreground" data-testid={`text-company-${exp.id}`}>
                          {exp.company}
                        </p>
                      </div>
                      <Badge variant="secondary" className="w-fit" data-testid={`badge-period-${exp.id}`}>
                        {exp.period}
                      </Badge>
                    </div>
                    {exp.description && (
                      <p className="text-sm text-muted-foreground mt-2" data-testid={`text-description-${exp.id}`}>
                        {exp.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Technical Skills */}
          <Card className="print:shadow-none print:border-0">
            <CardHeader>
              <CardTitle className="text-xl">Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {resumeData.technicalSkills.map((skillGroup, index) => (
                  <div key={index} data-testid={`skill-group-${index}`}>
                    <h4 className="font-medium text-sm mb-2" data-testid={`text-skill-category-${index}`}>
                      {skillGroup.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="outline"
                          className="text-xs"
                          data-testid={`badge-skill-${index}-${skillIndex}`}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Professional Skills */}
          <Card className="print:shadow-none print:border-0">
            <CardHeader>
              <CardTitle className="text-xl">Professional Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {resumeData.professionalSkills.map((skill, index) => (
                  <li key={index} className="text-sm flex gap-3" data-testid={`text-prof-skill-${index}`}>
                    <span className="text-primary mt-1.5">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="print:shadow-none print:border-0">
            <CardHeader>
              <CardTitle className="text-xl">Education</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {resumeData.education.map((edu, index) => (
                  <div key={edu.id} className={index > 0 ? "pt-4 border-t" : ""} data-testid={`card-education-${edu.id}`}>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div>
                        <h3 className="font-semibold text-base" data-testid={`text-degree-${edu.id}`}>
                          {edu.degree}
                        </h3>
                        <p className="text-sm text-muted-foreground" data-testid={`text-institution-${edu.id}`}>
                          {edu.institution}, {edu.location}
                        </p>
                      </div>
                      <Badge variant="secondary" className="w-fit" data-testid={`badge-year-${edu.id}`}>
                        {edu.year}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Projects */}
          <Card className="print:shadow-none print:border-0">
            <CardHeader>
              <CardTitle className="text-xl">Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {resumeData.projects.map((project, index) => (
                  <div key={project.id} className={index > 0 ? "pt-6 border-t" : ""} data-testid={`card-project-${project.id}`}>
                    <div className="space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                        <h3 className="font-semibold text-base" data-testid={`text-project-name-${project.id}`}>
                          {project.name}
                        </h3>
                        {project.client && (
                          <Badge variant="outline" className="w-fit" data-testid={`badge-client-${project.id}`}>
                            Client: {project.client}
                          </Badge>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="text-xs"
                            data-testid={`badge-tech-${project.id}-${techIndex}`}
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.database && (
                          <Badge variant="secondary" className="text-xs" data-testid={`badge-database-${project.id}`}>
                            {project.database}
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-project-description-${project.id}`}>
                        {project.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Footer - Print only */}
          <div className="hidden print:block text-center text-xs text-muted-foreground pt-6">
            <p>Generated from {resumeData.contact.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
