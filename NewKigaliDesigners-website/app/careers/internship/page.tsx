
"use client";

import React, { useState } from "react";
import { Navigation } from "@/components/navigation";
import { InternshipApplicationForm } from "@/components/internship-application-form";
import { Button } from "@/components/ui/button";

export default function InternshipPage() {
  const [showApplication, setShowApplication] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">
            Internship Program
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Join our Accounting Department internship program and gain valuable experience in the fashion industry.
          </p>
          <Button 
            size="lg" 
            className="text-lg px-8"
            onClick={() => setShowApplication(true)}
          >
            Apply for Internship
          </Button>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">
            Program Details
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-semibold">What You'll Learn</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Financial reporting and analysis</li>
                <li>• Accounting software systems</li>
                <li>• Budget planning and forecasting</li>
                <li>• Tax compliance and procedures</li>
                <li>• Fashion industry accounting practices</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-semibold">Requirements</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Currently enrolled in Accounting/Finance program</li>
                <li>• Minimum Year 2 student</li>
                <li>• Strong academic performance</li>
                <li>• Professional communication skills</li>
                <li>• Letter from university required</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      {showApplication && (
        <InternshipApplicationForm onClose={() => setShowApplication(false)} />
      )}
    </div>
  );
}
