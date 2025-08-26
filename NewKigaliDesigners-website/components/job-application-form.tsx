
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { X, Upload, FileText, CheckCircle } from "lucide-react"

interface JobApplicationFormProps {
  jobTitle: string
  jobId: number
  onClose: () => void
}

export function JobApplicationForm({ jobTitle, jobId, onClose }: JobApplicationFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    email: "",
    phone: "",
    countryCode: "+250"
  })

  const [files, setFiles] = useState({
    cv: null as File | null,
    applicationLetter: null as File | null,
    idCard: null as File | null,
    certificate: null as File | null,
    otherDocuments: null as File | null,
    coverLetter: null as File | null
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const countryCodes = [
    { code: "+250", country: "Rwanda" },
    { code: "+1", country: "USA/Canada" },
    { code: "+44", country: "United Kingdom" },
    { code: "+33", country: "France" },
    { code: "+49", country: "Germany" },
    { code: "+254", country: "Kenya" },
    { code: "+256", country: "Uganda" },
    { code: "+255", country: "Tanzania" },
    { code: "+234", country: "Nigeria" },
    { code: "+27", country: "South Africa" },
    { code: "+91", country: "India" },
    { code: "+86", country: "China" },
    { code: "+81", country: "Japan" },
    { code: "+61", country: "Australia" }
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleFileChange = (field: string, file: File | null) => {
    setFiles(prev => ({ ...prev, [field]: file }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Create FormData object for email submission
    const emailData = new FormData()
    emailData.append('jobTitle', jobTitle)
    emailData.append('jobId', jobId.toString())
    emailData.append('firstName', formData.firstName)
    emailData.append('lastName', formData.lastName)
    emailData.append('middleName', formData.middleName)
    emailData.append('email', formData.email)
    emailData.append('phone', `${formData.countryCode}${formData.phone}`)

    // Add files
    Object.entries(files).forEach(([key, file]) => {
      if (file) {
        emailData.append(key, file)
      }
    })

    try {
      // Save to localStorage for admin to access
      const existingApplications = JSON.parse(localStorage.getItem('jobApplications') || '[]')
      const newApplication = {
        id: Date.now(),
        type: 'job',
        jobTitle: jobTitle,
        jobId: jobId,
        data: formData,
        files: Object.keys(files).filter(key => files[key]).reduce((obj, key) => {
          obj[key] = files[key]?.name || null
          return obj
        }, {}),
        submittedAt: new Date().toISOString(),
        status: 'pending'
      }
      existingApplications.push(newApplication)
      localStorage.setItem('jobApplications', JSON.stringify(existingApplications))

      // Add notification for admin
      const existingNotifications = JSON.parse(localStorage.getItem('notifications') || '[]')
      existingNotifications.push({
        id: Date.now(),
        title: 'New Job Application',
        message: `${formData.firstName} ${formData.lastName} applied for ${jobTitle}`,
        timestamp: new Date().toISOString(),
        type: 'application'
      })
      localStorage.setItem('notifications', JSON.stringify(existingNotifications))

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Create mailto link as fallback
      const subject = `Job Application: ${jobTitle} (ID: ${jobId})`
      const body = `
Dear Hiring Manager,

I am applying for the position of ${jobTitle} (Job ID: ${jobId}).

Name: ${formData.firstName} ${formData.middleName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.countryCode}${formData.phone}

Attached Documents:
- CV/Resume: ${files.cv?.name || 'Not provided'}
- Application Letter: ${files.applicationLetter?.name || 'Not provided'}
- Cover Letter: ${files.coverLetter?.name || 'Not provided'}
- Identity Card: ${files.idCard?.name || 'Not provided'}
- Certificates: ${files.certificate?.name || 'Not provided'}
- Other Documents: ${files.otherDocuments?.name || 'Not provided'}

Please find all my application documents attached for your review.

Best regards,
${formData.firstName} ${formData.lastName}
      `.trim()

      const mailtoLink = `mailto:akizeisrael123@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      window.open(mailtoLink, '_blank')

      setSubmitted(true)
    } catch (error) {
      console.error('Error submitting application:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <CardTitle className="text-green-600">Application Submitted!</CardTitle>
            <CardDescription>
              Your application for {jobTitle} has been submitted successfully. 
              We'll review your application and get back to you soon.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={onClose} className="w-full">
              Close
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <Card className="w-full max-w-2xl my-8">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Apply for {jobTitle}</CardTitle>
              <CardDescription>Job ID: {jobId}</CardDescription>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Personal Information</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="middleName">Middle Name (Optional)</Label>
                <Input
                  id="middleName"
                  value={formData.middleName}
                  onChange={(e) => handleInputChange("middleName", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <div className="flex gap-2">
                  <select
                    value={formData.countryCode}
                    onChange={(e) => handleInputChange("countryCode", e.target.value)}
                    className="px-3 py-2 border border-input rounded-md text-sm"
                  >
                    {countryCodes.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.code} ({country.country})
                      </option>
                    ))}
                  </select>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="Phone number"
                    required
                    className="flex-1"
                  />
                </div>
              </div>
            </div>

            {/* Cover Letter Upload */}
            <div className="space-y-2">
              <Label>Cover Letter *</Label>
              <div className="border-2 border-dashed border-border rounded-lg p-4 text-center">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => handleFileChange("coverLetter", e.target.files?.[0] || null)}
                  className="hidden"
                  id="cover-letter-upload"
                  required
                />
                <label htmlFor="cover-letter-upload" className="cursor-pointer">
                  <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">
                    {files.coverLetter ? files.coverLetter.name : "Click to upload cover letter"}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    PDF, DOC, or DOCX format (Max 5MB)
                  </p>
                </label>
              </div>
            </div>

            {/* Document Upload */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Required Documents</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                {/* CV Upload */}
                <div className="space-y-2">
                  <Label>CV/Resume *</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-4 text-center">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => handleFileChange("cv", e.target.files?.[0] || null)}
                      className="hidden"
                      id="cv-upload"
                      required
                    />
                    <label htmlFor="cv-upload" className="cursor-pointer">
                      <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">
                        {files.cv ? files.cv.name : "Click to upload CV"}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        PDF, DOC, or DOCX format (Max 5MB)
                      </p>
                    </label>
                  </div>
                </div>

                {/* Cover Letter Upload */}
                <div className="space-y-2">
                  <Label>Cover Letter *</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-4 text-center">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => handleFileChange("coverLetter", e.target.files?.[0] || null)}
                      className="hidden"
                      id="cover-letter-upload"
                      required
                    />
                    <label htmlFor="cover-letter-upload" className="cursor-pointer">
                      <FileText className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">
                        {files.coverLetter ? files.coverLetter.name : "Click to upload cover letter"}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        PDF, DOC, or DOCX format (Max 5MB)
                      </p>
                    </label>
                  </div>
                </div>

                {/* Application Letter Upload */}
                <div className="space-y-2">
                  <Label>Application Letter *</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-4 text-center">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => handleFileChange("applicationLetter", e.target.files?.[0] || null)}
                      className="hidden"
                      id="application-letter-upload"
                      required
                    />
                    <label htmlFor="application-letter-upload" className="cursor-pointer">
                      <FileText className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">
                        {files.applicationLetter ? files.applicationLetter.name : "Click to upload letter"}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        PDF, DOC, or DOCX format (Max 5MB)
                      </p>
                    </label>
                  </div>
                </div>

                {/* ID Card Upload */}
                <div className="space-y-2">
                  <Label>Identity Card *</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-4 text-center">
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => handleFileChange("idCard", e.target.files?.[0] || null)}
                      className="hidden"
                      id="id-card-upload"
                      required
                    />
                    <label htmlFor="id-card-upload" className="cursor-pointer">
                      <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">
                        {files.idCard ? files.idCard.name : "Click to upload ID"}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        PDF, JPG, JPEG, or PNG format (Max 5MB)
                      </p>
                    </label>
                  </div>
                </div>

                {/* Certificate Upload (Optional) */}
                <div className="space-y-2">
                  <Label>Certificates (Optional)</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-4 text-center">
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => handleFileChange("certificate", e.target.files?.[0] || null)}
                      className="hidden"
                      id="certificate-upload"
                    />
                    <label htmlFor="certificate-upload" className="cursor-pointer">
                      <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">
                        {files.certificate ? files.certificate.name : "Click to upload certificates"}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        PDF, JPG, JPEG, or PNG format (Max 5MB)
                      </p>
                    </label>
                  </div>
                </div>
              </div>

              {/* Other Documents Upload (Optional) */}
              <div className="space-y-2">
                <Label>Other Documents (Optional)</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-4 text-center">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    onChange={(e) => handleFileChange("otherDocuments", e.target.files?.[0] || null)}
                    className="hidden"
                    id="other-docs-upload"
                  />
                  <label htmlFor="other-docs-upload" className="cursor-pointer">
                    <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">
                      {files.otherDocuments ? files.otherDocuments.name : "Click to upload additional documents"}
                    </p>
                  </label>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex gap-4">
              <Button type="submit" disabled={isSubmitting} className="flex-1">
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
