import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { GraduationCap, X, Plus } from "lucide-react";

const TechStackSection: React.FC<{
  techStack: string[];
  currentlyLearning: string[];
  isEditing: boolean;

  onUpdate: (field: string, value: string[]) => void;

}> = ({ techStack, currentlyLearning, isEditing, onUpdate }) => {
  const [newTech, setNewTech] = useState("");
  const [newLearning, setNewLearning] = useState("");

  const addTech = (type: "techStack" | "currentlyLearning") => {
    const value = type === "techStack" ? newTech : newLearning;
    if (value.trim()) {
      const current = type === "techStack" ? techStack : currentlyLearning;
      onUpdate(type, [...current, value.trim()]);
      if (type === "techStack") setNewTech("");
      else setNewLearning("");
    }
  };

  const removeTech = (
    type: "techStack" | "currentlyLearning",
    index: number
  ) => {
    const current = type === "techStack" ? techStack : currentlyLearning;
    console.log("[debug]:", current);
    onUpdate(
      type,
      current.filter((_, i) => i !== index)
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <GraduationCap className="w-5 h-5" />
          Technical Skills
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="font-semibold mb-3 text-foreground">Tech Stack</h3>
          <div className="flex flex-wrap gap-2 mb-3">
            {techStack.map((tech, index) => (
              <div key={index} className="flex items-center gap-1">
                <Badge variant="default">{tech}</Badge>
                {isEditing && (
                  <X
                    className="w-3 h-3 cursor-pointer hover:text-destructive"
                    onClick={() => removeTech("techStack", index)}
                  />
                )}
              </div>
            ))}
          </div>
          {isEditing && (
            <div className="flex gap-2">
              <Input
                placeholder="Add new technology"
                value={newTech}
                onChange={(e) => setNewTech(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && addTech("techStack")}
              />
              <Button size="sm" onClick={() => addTech("techStack")}>
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>

        <Separator />

        <div>
          <h3 className="font-semibold mb-3 text-foreground">
            Currently Learning
          </h3>
          <div className="flex flex-wrap gap-2 mb-3">
            {currentlyLearning.map((tech, index) => (
                <div key={index} className="flex items-center gap-1">
              <Badge
                variant="secondary"
                className="flex items-center gap-1"
              > {tech}</Badge>
               
                {isEditing && (
                  <X
                    className="w-3 h-3 cursor-pointer hover:text-destructive"
                    onClick={() => removeTech("currentlyLearning", index)}
                  />
                )}
                </div>
              
            ))}
          </div>
          {isEditing && (
            <div className="flex gap-2">
              <Input
                placeholder="Add what you're learning"
                value={newLearning}
                onChange={(e) => setNewLearning(e.target.value)}
                onKeyPress={(e) =>
                  e.key === "Enter" && addTech("currentlyLearning")
                }
              />
              <Button size="sm" onClick={() => addTech("currentlyLearning")}>
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TechStackSection;
