import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <motion.div
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      >
        <h1 className="text-[10rem] font-bold text-primary">404</h1>
      </motion.div>

      <Card className="max-w-md mt-4 rounded-2xl shadow-xl">
        <CardContent className="p-6 flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
          <p className="text-muted-foreground text-center mb-4">
            Sorry, the page you are looking for doesn’t exist or has been moved.
          </p>
          <Button onClick={() => navigate("/")} className="mt-2">
            Go Home
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFoundPage;
