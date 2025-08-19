import Navigation from "@/components/Navigation";
import ProjectImageUpload from "@/components/ProjectImageUpload";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, Upload, FolderOpen } from "lucide-react";

const Admin = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Settings className="h-8 w-8 text-primary" />
              <h1 className="text-4xl font-bold text-foreground">
                Admin Panel
              </h1>
            </div>
            <p className="text-xl text-muted-foreground">
              Manage your portfolio content and media
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Upload className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Upload Images</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Add new project images and media files
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <FolderOpen className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Organize</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Manage your image folders and organization
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Settings className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Configure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  Update portfolio settings and preferences
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            <ProjectImageUpload />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;