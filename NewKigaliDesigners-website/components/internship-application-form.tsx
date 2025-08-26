
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { X, Upload, FileText, CheckCircle } from "lucide-react"

interface InternshipApplicationFormProps {
  onClose: () => void
}

export function InternshipApplicationForm({ onClose }: InternshipApplicationFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    gender: "",
    email: "",
    phone: "",
    countryCode: "+250",
    university: "",
    studyProgram: "",
    yearOfStudy: "",
    expectedGraduation: "",
    // Interactive questions
    whyInternship: "",
    accountingKnowledge: "",
    softwareExperience: "",
    careerGoals: "",
    availableHours: "",
    startDate: ""
  })

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    gender: "",
    email: "",
    phone: "",
    university: "",
    studyProgram: "",
    yearOfStudy: "",
    expectedGraduation: "",
    whyInternship: "",
    accountingKnowledge: "",
    softwareExperience: "",
    careerGoals: "",
    availableHours: "",
    startDate: "",
    recommendationLetter: "",
    cv: "",
    idCard: ""
  });

  const [files, setFiles] = useState({
    recommendationLetter: null as File | null,
    cv: null as File | null,
    idCard: null as File | null
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

    // Comprehensive validation
    const newErrors = { ...errors };
    if (!formData.firstName) newErrors.firstName = "First name is required.";
    if (!formData.lastName) newErrors.lastName = "Last name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.gender) newErrors.gender = "Gender is required.";
    if (!formData.university) newErrors.university = "University is required.";
    if (!formData.studyProgram) newErrors.studyProgram = "Study program is required.";
    if (!formData.yearOfStudy) newErrors.yearOfStudy = "Year of study is required.";
    if (!formData.expectedGraduation) newErrors.expectedGraduation = "Expected graduation date is required.";
    if (!formData.whyInternship) newErrors.whyInternship = "Please explain why you want this internship.";
    if (!formData.accountingKnowledge) newErrors.accountingKnowledge = "Please describe your accounting knowledge.";
    if (!formData.softwareExperience) newErrors.softwareExperience = "Please describe your software experience.";
    if (!formData.careerGoals) newErrors.careerGoals = "Please share your career goals.";
    if (!formData.availableHours) newErrors.availableHours = "Please specify your availability.";
    if (!formData.startDate) newErrors.startDate = "Please specify when you can start.";
    if (!files.recommendationLetter) newErrors.recommendationLetter = "Recommendation letter is required.";
    if (!files.cv) newErrors.cv = "CV is required.";
    if (!files.idCard) newErrors.idCard = "ID card is required.";

    setErrors(newErrors);

    if (Object.values(newErrors).some(error => error)) {
      setIsSubmitting(false);
      return;
    }

    try {
      // Save to localStorage for admin to access
      const existingApplications = JSON.parse(localStorage.getItem('internshipApplications') || '[]')
      const newApplication = {
        id: Date.now(),
        type: 'internship',
        data: formData,
        files: {
          recommendationLetter: files.recommendationLetter?.name || null,
          cv: files.cv?.name || null,
          idCard: files.idCard?.name || null
        },
        submittedAt: new Date().toISOString(),
        status: 'pending'
      }
      existingApplications.push(newApplication)
      localStorage.setItem('internshipApplications', JSON.stringify(existingApplications))

      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 2000))

      // Create comprehensive mailto link to both emails
      const subject = `Internship Application - Accounting Department - ${formData.firstName} ${formData.lastName}`
      const body = `
Dear Hiring Manager,

I am applying for an internship position in the Accounting Department at New Kigali Designers.

PERSONAL INFORMATION:
Name: ${formData.firstName} ${formData.middleName} ${formData.lastName}
Gender: ${formData.gender}
Email: ${formData.email}
Phone: ${formData.countryCode}${formData.phone}

ACADEMIC INFORMATION:
University: ${formData.university}
Study Program: ${formData.studyProgram}
Year of Study: ${formData.yearOfStudy}
Expected Graduation: ${formData.expectedGraduation}

INTERNSHIP QUESTIONS & RESPONSES:

1. Why do you want to intern with us?
${formData.whyInternship}

2. Describe your accounting knowledge and background:
${formData.accountingKnowledge}

3. What accounting software or tools have you used?
${formData.softwareExperience}

4. What are your career goals in accounting?
${formData.careerGoals}

5. How many hours per week are you available?
${formData.availableHours}

6. When can you start the internship?
${formData.startDate}

ATTACHED DOCUMENTS:
- Recommendation Letter: ${files.recommendationLetter?.name || 'Not provided'}
- CV: ${files.cv?.name || 'Not provided'}
- ID Card: ${files.idCard?.name || 'Not provided'}

Please find the above mentioned documents attached with this application.

Best regards,
${formData.firstName} ${formData.lastName}
${formData.email}
${formData.countryCode}${formData.phone}
      `.trim()

      // Create mailto links for both emails
      const mailtoLink1 = `mailto:akizeisrael123@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      const mailtoLink2 = `mailto:inizeyimana.bizimana@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      
      // Open both email clients
      window.open(mailtoLink1, '_blank')
      setTimeout(() => {
        window.open(mailtoLink2, '_blank')
      }, 500)

      setSubmitted(true)
    } catch (error) {
      console.error('Error submitting internship application:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <Card className="w-full max-w-lg">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <CardTitle className="text-green-600 text-xl">Application Successfully Submitted!</CardTitle>
            <CardDescription className="text-base">
              Thank you for applying for our Accounting Internship Program at New Kigali Designers.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-center">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">What happens next?</h4>
              <ul className="text-sm text-blue-700 space-y-1 text-left">
                <li>• Your application has been sent to our HR team</li>
                <li>• We'll review your documents and responses</li>
                <li>• If selected, we'll contact you within 5-7 business days</li>
                <li>• You may be invited for an interview</li>
              </ul>
            </div>
            <div className="bg-amber-50 p-3 rounded-lg">
              <p className="text-sm text-amber-700">
                <strong>Important:</strong> Please check your email regularly and ensure our emails don't go to spam.
              </p>
            </div>
            <Button onClick={onClose} className="w-full" size="lg">
              Close Application
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <Card className="w-full max-w-3xl my-8">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl">Internship Application - Accounting Department</CardTitle>
              <CardDescription>Apply for our accounting internship program at New Kigali Designers</CardDescription>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground border-b pb-2">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-foreground font-medium">
                    First Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    className={`${errors.firstName ? "border-red-500" : ""}`}
                    placeholder="Enter your first name"
                  />
                  {errors.firstName && <p className="text-sm text-red-500">{errors.firstName}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="middleName" className="text-foreground font-medium">
                    Middle Name <span className="text-gray-500">(Optional)</span>
                  </Label>
                  <Input
                    id="middleName"
                    value={formData.middleName}
                    onChange={(e) => handleInputChange("middleName", e.target.value)}
                    placeholder="Enter your middle name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-foreground font-medium">
                    Last Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    className={`${errors.lastName ? "border-red-500" : ""}`}
                    placeholder="Enter your last name"
                  />
                  {errors.lastName && <p className="text-sm text-red-500">{errors.lastName}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="gender">Gender *</Label>
                  <select
                    id="gender"
                    value={formData.gender}
                    onChange={(e) => handleInputChange("gender", e.target.value)}
                    className={`w-full px-3 py-2 border rounded-md text-sm ${errors.gender ? "border-red-500" : "border-input"}`}
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                  </select>
                  {errors.gender && <p className="text-sm text-red-500">{errors.gender}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={`${errors.email ? "border-red-500" : ""}`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
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
                    className="flex-1"
                  />
                </div>
              </div>
            </div>

            {/* Academic Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Academic Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="university">University/Institution *</Label>
                  <Input
                    id="university"
                    value={formData.university}
                    onChange={(e) => handleInputChange("university", e.target.value)}
                    className={`${errors.university ? "border-red-500" : ""}`}
                    placeholder="e.g., University of Rwanda"
                  />
                  {errors.university && <p className="text-sm text-red-500">{errors.university}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="studyProgram">Study Program *</Label>
                  <Input
                    id="studyProgram"
                    value={formData.studyProgram}
                    onChange={(e) => handleInputChange("studyProgram", e.target.value)}
                    className={`${errors.studyProgram ? "border-red-500" : ""}`}
                    placeholder="e.g., Bachelor of Accounting"
                  />
                  {errors.studyProgram && <p className="text-sm text-red-500">{errors.studyProgram}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="yearOfStudy">Current Year of Study *</Label>
                  <select
                    id="yearOfStudy"
                    value={formData.yearOfStudy}
                    onChange={(e) => handleInputChange("yearOfStudy", e.target.value)}
                    className={`w-full px-3 py-2 border rounded-md text-sm ${errors.yearOfStudy ? "border-red-500" : "border-input"}`}
                  >
                    <option value="">Select Year</option>
                    <option value="Year 1">Year 1</option>
                    <option value="Year 2">Year 2</option>
                    <option value="Year 3">Year 3</option>
                    <option value="Year 4">Year 4</option>
                    <option value="Master's">Master's</option>
                  </select>
                  {errors.yearOfStudy && <p className="text-sm text-red-500">{errors.yearOfStudy}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="expectedGraduation">Expected Graduation *</Label>
                  <Input
                    id="expectedGraduation"
                    type="month"
                    value={formData.expectedGraduation}
                    onChange={(e) => handleInputChange("expectedGraduation", e.target.value)}
                    className={`${errors.expectedGraduation ? "border-red-500" : ""}`}
                  />
                  {errors.expectedGraduation && <p className="text-sm text-red-500">{errors.expectedGraduation}</p>}
                </div>
              </div>
            </div>

            {/* Interactive Questions */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Application Questions</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="whyInternship">1. Why do you want to intern with New Kigali Designers? *</Label>
                  <Textarea
                    id="whyInternship"
                    value={formData.whyInternship}
                    onChange={(e) => handleInputChange("whyInternship", e.target.value)}
                    className={`${errors.whyInternship ? "border-red-500" : ""}`}
                    placeholder="Explain what interests you about our company and this internship opportunity..."
                    rows={3}
                  />
                  {errors.whyInternship && <p className="text-sm text-red-500">{errors.whyInternship}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="accountingKnowledge">2. Describe your accounting knowledge and any relevant coursework *</Label>
                  <Textarea
                    id="accountingKnowledge"
                    value={formData.accountingKnowledge}
                    onChange={(e) => handleInputChange("accountingKnowledge", e.target.value)}
                    className={`${errors.accountingKnowledge ? "border-red-500" : ""}`}
                    placeholder="Tell us about your accounting courses, projects, or any practical experience..."
                    rows={3}
                  />
                  {errors.accountingKnowledge && <p className="text-sm text-red-500">{errors.accountingKnowledge}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="softwareExperience">3. What accounting software or tools have you used? *</Label>
                  <Textarea
                    id="softwareExperience"
                    value={formData.softwareExperience}
                    onChange={(e) => handleInputChange("softwareExperience", e.target.value)}
                    className={`${errors.softwareExperience ? "border-red-500" : ""}`}
                    placeholder="e.g., Excel, QuickBooks, SAP, Sage, or any other accounting software..."
                    rows={2}
                  />
                  {errors.softwareExperience && <p className="text-sm text-red-500">{errors.softwareExperience}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="careerGoals">4. What are your career goals in accounting? *</Label>
                  <Textarea
                    id="careerGoals"
                    value={formData.careerGoals}
                    onChange={(e) => handleInputChange("careerGoals", e.target.value)}
                    className={`${errors.careerGoals ? "border-red-500" : ""}`}
                    placeholder="Share your long-term career aspirations in accounting and finance..."
                    rows={3}
                  />
                  {errors.careerGoals && <p className="text-sm text-red-500">{errors.careerGoals}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="availableHours">5. How many hours per week are you available? *</Label>
                    <select
                      id="availableHours"
                      value={formData.availableHours}
                      onChange={(e) => handleInputChange("availableHours", e.target.value)}
                      className={`w-full px-3 py-2 border rounded-md text-sm ${errors.availableHours ? "border-red-500" : "border-input"}`}
                    >
                      <option value="">Select availability</option>
                      <option value="10-15 hours">10-15 hours per week</option>
                      <option value="16-25 hours">16-25 hours per week</option>
                      <option value="26-35 hours">26-35 hours per week</option>
                      <option value="36-40 hours">36-40 hours per week (Full-time)</option>
                    </select>
                    {errors.availableHours && <p className="text-sm text-red-500">{errors.availableHours}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="startDate">6. When can you start the internship? *</Label>
                    <Input
                      id="startDate"
                      type="date"
                      value={formData.startDate}
                      onChange={(e) => handleInputChange("startDate", e.target.value)}
                      className={`${errors.startDate ? "border-red-500" : ""}`}
                    />
                    {errors.startDate && <p className="text-sm text-red-500">{errors.startDate}</p>}
                  </div>
                </div>
              </div>
            </div>

            {/* Required Documents */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Required Documents</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Recommendation Letter */}
                <div className="space-y-2">
                  <Label>Recommendation Letter from School *</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-4 text-center">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => handleFileChange("recommendationLetter", e.target.files?.[0] || null)}
                      className="hidden"
                      id="recommendation-letter-upload"
                    />
                    <label htmlFor="recommendation-letter-upload" className="cursor-pointer">
                      <Upload className="h-6 w-6 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">
                        {files.recommendationLetter ? files.recommendationLetter.name : "Upload recommendation letter"}
                      </p>
                    </label>
                  </div>
                  {errors.recommendationLetter && <p className="text-sm text-red-500">{errors.recommendationLetter}</p>}
                </div>

                {/* CV */}
                <div className="space-y-2">
                  <Label>CV/Resume *</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-4 text-center">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => handleFileChange("cv", e.target.files?.[0] || null)}
                      className="hidden"
                      id="cv-upload"
                    />
                    <label htmlFor="cv-upload" className="cursor-pointer">
                      <Upload className="h-6 w-6 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">
                        {files.cv ? files.cv.name : "Upload your CV"}
                      </p>
                    </label>
                  </div>
                  {errors.cv && <p className="text-sm text-red-500">{errors.cv}</p>}
                </div>

                {/* ID Card */}
                <div className="space-y-2">
                  <Label>ID Card (Indangamuntu) *</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-4 text-center">
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => handleFileChange("idCard", e.target.files?.[0] || null)}
                      className="hidden"
                      id="id-upload"
                    />
                    <label htmlFor="id-upload" className="cursor-pointer">
                      <Upload className="h-6 w-6 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">
                        {files.idCard ? files.idCard.name : "Upload ID card"}
                      </p>
                    </label>
                  </div>
                  {errors.idCard && <p className="text-sm text-red-500">{errors.idCard}</p>}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex gap-4 pt-4">
              <Button type="submit" disabled={isSubmitting} className="flex-1" size="lg">
                {isSubmitting ? "Submitting Application..." : "Submit Internship Application"}
              </Button>
              <Button type="button" variant="outline" onClick={onClose} size="lg">
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
