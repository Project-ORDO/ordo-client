import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const UnauthorizedPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col items-center justify-center flex-grow min-h-screen px-4">
      <motion.h1
        className="text-[6rem] font-extrabold text-destructive"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: [1, 1.1, 1] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      >
        401
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Card className="max-w-md mt-4 rounded-2xl shadow-xl">
          <CardContent className="p-6 flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-2">Unauthorized Access</h2>
            <p className="text-muted-foreground text-center mb-4">
              You don’t have permission to view this page.
            </p>
            <Button onClick={() => navigate("/login")}>
              Go to Login
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
};

export default UnauthorizedPage;
