Product Requirements Document (PRD)
SupTech365 - Financial Intelligence Platform

📌 Document Metadata
Document Title: Product Requirements Document - SupTech365
 Product Name: SupTech365 Financial Intelligence Platform
 Version: 1.0
 Author: RegTech Product Management
 Stakeholders:
Mohammed A. Nasser (Officer-In-Charge, FIA)
Amos Yollah Boakai (Deputy Director General, FIA)
FIA Analytical Team
Central Bank of Liberia
Reporting Entities (Banks, MFIs, FinTech, Insurance Companies)
Status: Draft
 Last Updated: January 2026

🧾 Executive Summary
Problem Statement
Liberia's Financial Intelligence Agency currently operates with manual, email-based Excel processing that cannot scale with increasing transaction report volumes from 379+ potential reporting entities. Analysts lack centralized tools to track subjects across reports, detect patterns, or efficiently prioritize high-risk activity.
Target Users
Primary: FIA staff (30 total: 10-12 compliance officers, 10-12 analysts, the director operations, Head of Analysis, Compliance Manager, Compliance Supervisor)
Secondary: 379+ reporting entities (currently 46+ actively reporting)
Proposed Solution
A two-sided digital platform that enables reporting entities to submit transaction reports primarily via automated API integration using goAML XML format, with Excel-based manual submission as a fallback for institutions without integration capability, while providing the FIA with centralized validation, analysis, case management, and intelligence dissemination aligned with goAML standards.

Expected Value
For FIA: Reduce manual workload by 60% (from 45 days to 18 days per report lifecycle), enable subject tracking across all historical reports, automate risk-based alert generation
For Liberia: Strengthen AML/CFT regime, achieve FATF compliance, enhance financial crime prosecution capability

🧩 Problem Statement
Current Situation
The FIA receives Suspicious Transaction Reports (STRs), Currency Transaction Reports (CTRs) via email using Excel templates. All analysis is performed manually in disconnected spreadsheets.
Pain Points
Volume Crisis: Manual Excel processing cannot handle growing transaction volumes from expanding reporting entity base
Tracking Failure: No ability to track subjects, accounts, or entities across multiple reports over time
Pattern Blindness: Historical data trapped in email threads and disconnected files prevents detection of behavioral patterns
Inefficient Triage: Every report requires manual review; no automated risk-based prioritization
Evidence Gaps: Cannot build comprehensive investigation files linking related reports and subjects
Compliance Risk: Unable to fulfill FATF intelligence mandate at current operational scale
Who Is Affected
Officer-in-Charge (OIC): Cannot confidently and quickly authorize dissemination and major operational decisions because intelligence packages are assembled manually from fragmented emails/Excel files, audit trails are incomplete or hard to reconstruct, and there is limited executive-level visibility into case evidence completeness, risk priority, and workflow status.
Director of Operations: Limited real-time visibility into end-to-end CTR/STR throughput and bottlenecks because work is spread across emails and disconnected Excel files, making escalation authorization slower and less evidence-backed.
Head of Analysis: Cannot efficiently prioritize, assign, or monitor STR investigations because there is no centralized queue, no automated triage/alerting, and limited ability to track subject history across reports.
FIA Analysts: Overwhelmed with manual processing, unable to perform deep intelligence work. (skip)
Operations Manager / Head of Compliance: Struggles to consistently determine whether CTRs should be escalated because escalation decisions rely on manual review, incomplete context, and fragmented historical records across spreadsheets and email threads.
Compliance Officer Supervisor: Has difficulty enforcing consistent CTR review quality and timeliness across compliance officers because there is no workflow system to track assignments, deadlines, reasons for decisions, or overdue items.
Compliance Officers: Manual validation and classification are slow and error-prone because Excel submissions are inconsistent, often missing mandatory fields, and lack automated validation and standardized data quality checks. CTR reviews also fail to consistently detect structuring, repeated activity, or linked subjects/accounts because the process is manual and lacks automated red-flag rules, subject profiling, and cross-report linkage across submissions.
Reporting Entities: Burden of email submissions with no validation feedback.
Law Enforcement: Delays in receiving actionable intelligence for prosecutions. 
Liberia: Reputational risk from inadequate AML/CFT infrastructure

Evidence
Current analyst workload: 45 days average per report from submission to dissemination
46+ entities currently reporting vs. 379+ potential reporting entities
No centralized database of historical reports or subjects
Manual Excel-based analysis for all transaction pattern detection

🎯 Goals & Objectives
6.1 Business Goals
Operational Efficiency: Reduce report processing time from 45 days to 18 days (60% improvement)
Scalability: Support growth from 46 to 379+ reporting entities without proportional staff increase
Compliance: Achieve full FATF technical compliance for financial intelligence operations
Intelligence Production: Increase quality and volume of actionable intelligence delivered to law enforcement
Cost Management: Provide cost-effective alternative to expensive international FIU systems
For the Officer-in-Charge (OIC):
View an executive dashboard showing real-time volumes, bottlenecks, and performance across CTR and STR workflows (submission → validation → review → analysis → case → intelligence → dissemination).
Review intelligence packages with complete linked evidence (reports, subjects, transactions, documents, analyst findings) before authorizing dissemination.
Approve or return intelligence outputs with documented justification and a complete audit trail suitable for oversight and external review.
Prioritize high-risk cases for accelerated handling using clear risk indicators and escalation flags.
Perform dissemination to LEA.
Track dissemination history (who received what, when, reference numbers) and monitor follow-up/feedback from law enforcement.

For Director of Operations:
Maintain overall oversight of operational reporting processes
Authorize escalations from compliance to analysis based on risk assessment
Monitor organizational performance across compliance and analysis departments
Generate executive dashboards showing FIA-wide metrics
Ensure regulatory compliance and operational efficiency
For FIA Analysts (Analysis Department):
Receive all STRs for investigation
Track any subject across all historical reports instantly
Receive automated alerts on high-risk patterns from escalated CTRs and STRs
Build comprehensive investigation cases with linked evidence
Search entire report database in seconds
Produce professional intelligence reports efficiently
Conduct financial analysis and pattern detection across all report types
For Operations Manager / Head of Compliance:
Manage CTR intake and compliance review workflow
Determine whether CTRs should remain as CTRs or be escalated as potential STRs
Oversee compliance team workload and performance
Monitor CTR processing times and quality metrics
Ensure smooth handoff of escalated reports to Analysis Department
For Head of Analysis:
Manage STR analysis workflow and case development
Monitor analyst workloads and case assignment distribution
Review case proposals with supporting evidence
Approve or return cases with documented justification
Track intelligence production and dissemination metrics
For Compliance Officer Supervisors:
Supervise compliance officers
Ensure completeness, accuracy, timeliness and regulatory conformity of CTRs
Monitor validation queue and workload distribution
Review escalation recommendations from compliance officers
Maintain audit trail of compliance decisions
For Compliance Officers:
Conduct initial compliance checks on CTRs
Flag anomalies or red-flags for escalation consideration
Provide clear, actionable feedback to reporting entities on submission errors
Track validation workload and completion rates
Ensure only complete, usable reports proceed in workflow
Perform data entry, validation, and classification of CTRs efficiently using automated quality checks
Ensure proper formatting and submission into the system
Identify and correct data quality issues before compliance review
Track data entry workload and completion rates
Maintain audit trail of all data validation activities
For Reporting Entities:
Submit reports digitally API primarily and Excel as fall back.
Receive instant validation feedback
Track submission status
Reduce compliance burden through standardized workflows
6.3 Non-Goals
NOT replacing existing accounting or transaction monitoring systems within banks
NOT providing training on AML/CFT regulations or compliance programs
NOT performing real-time transaction monitoring (focus is on submitted reports)
NOT offering public-facing services or citizen reporting
NOT creating a regional or multi-country FIU network (Liberia-focused initially)

👥 Users & Stakeholders
7.1 User Personas
Financial Analyst (Analysis Department)
Role: Investigates all STRs and escalated CTRs for suspicious activity
Needs:
Receive STRs only when assigned by the Head of Analysis.
Search subjects across all reports (STRs and CTRs) quickly
Identify transaction patterns and behavioral anomalies
Link related reports to build evidence
Manage multiple investigations simultaneously
Access full CTR history when analyzing escalated reports
Compile investigation findings into structured reports
Constraints:
Limited technical training
High volume workload from both direct STRs and escalated CTRs
Must maintain audit trail for legal compliance
Cannot access CTRs unless escalated or linked to active investigation

Compliance Officer
Role: Handles CTR intake operations, including data entry/validation, CTR quality control, and initial compliance review. Flags anomalies and recommends escalation of suspicious CTRs to STR status.

Needs
Automated validation to catch technical errors (format, mandatory fields, data types).
A clear CTR intake/review queue ordered by submission time.
Template-based return/correction workflows with standardized error reasons.
Ability to flag potential STR indicators and submit escalation recommendations to supervisor review.
Workload and productivity dashboards covering:
validation throughput
compliance review throughput
backlog size and aging
escalation recommendation rates
Access to historical CTR data for the same subject/account to support compliance review.
Ability to provide structured feedback to reporting entities through the system (return/reject reasons).



Constraints
Must follow strict intake validation and compliance review checklists.
Cannot modify reported transaction data (read-only content; only decisions/notes).


Limited discretion: decisions must align with defined rules and escalation criteria.
Cannot escalate CTRs to STR without supervisor approval.
Must document reasons for return/reject/escalation recommendations.
Responsible for first-line data quality control and compliance workflow consistency.



Pain Points (Current State)
Manual handling of CTR intake from Excel templates.
No automated format validation leading to repeated back-and-forth.
Difficulty tracking backlog and throughput across intake and compliance review work.
Limited ability to compare current CTRs against subject historical activity quickly.
No standardized escalation criteria or repeatable workflow.

Head of Analysis
Role: Manages STR analysis workflow and intelligence production
Needs:
Monitor analyst workloads and assignment distribution
Review case proposals with supporting evidence
Approve or return cases with documented justification
Track intelligence production and dissemination metrics
Coordinate with Head of Compliance on escalated CTRs requiring additional context
Generate analysis performance dashboards
Constraints:
Reports to Director of Operations
Final authority on case openings within analysis function
Accountable for intelligence quality and timeliness
Must ensure legal sufficiency of intelligence outputs

Persona 7: Director of Operations
Role: Provides overall oversight of operational reporting processes
Needs:
Maintain visibility across both compliance and analysis departments
Authorize escalations from compliance to analysis when required
Monitor FIA-wide operational performance (processing times, case opening rate, dissemination volume)
Generate executive dashboards for FIA leadership
Ensure regulatory compliance and audit readiness
Make strategic decisions on resource allocation and workflow optimization
Constraints:
Accountable for entire operational reporting lifecycle
Must balance compliance rigor with analysis capacity
Final authority on escalation disputes between compliance and analysis
Responsible for FATF compliance demonstration

Officer In Charge (OIC)
Role:Disseminates intelligence reports to law enforcement
Needs:
Track dissemination to external agencies
Monitor feedback from recipients
Maintain dissemination log for audit purposes
Constraints:
Must follow dissemination authorization protocols
Reports must meet legal standards for prosecution

Reporting Entity Compliance Officer
Role: Submits STRs/CTRs on behalf of bank or financial institution
Needs:
Submit reports in flexible formats (Excel, XML, or API)
Receive immediate validation confirmation
Understand rejection reasons clearly
Track submission status through workflow
Distinguish between CTR and STR submission requirements
Constraints:
Limited technical resources
Regulatory submission deadlines
Must protect customer data during transmission
Must correctly classify reports as STR vs. CTR

7.2 Stakeholders
Internal:
OIC
Director of Operations
Operations Manager / Head of Compliance
Head of Analysis
Compliance Officer Supervisors
Compliance Officer
Legal Department
IT/Technical Support
External:
Central Bank of Liberia (regulatory authority)
Law Enforcement Agencies (intelligence recipients)
Reporting Entities (banks, MFIs, FinTech, insurance, casinos)
International Partners (FATF, donor agencies)


📦 Scope Definition
8.1 In Scope
Phase 1 - Foundation (Week 1-6):
Digital submission capability (Primary: API following goAML XML schema) and Excel upload fallback, and also a portal to track status on submission reports
Automated and manual validation workflows
Task assignment and workload distribution
Subject profiling tool (track across reports over time)
Rule-based analysis and alert generation
Structured workflow management (Validate → Review → Analyze → Approve → Case → Intelligence → Dissemination)
Phase 2 - Intelligence (Week 7-10): 7. Ad-hoc search and query capabilities 8. Structured tactical and strategic analysis frameworks 9. Document management with full-text search 10. Intelligence case file management 11. Intelligence report writer and templates
Phase 3 - Strategic Analytics (Months 11+): 12. Statistical reporting and FATF compliance dashboards 13. External data integration (sanctions lists, PEP databases) 14. Network visualization and charting tools
8.2 Out of Scope
Real-time transaction monitoring within financial institutions
Customer relationship management (CRM) for reporting entities
Training management systems
Human resources or payroll functions
Public complaint or whistleblower portals
Multi-language support (English only for Phase 1)
Mobile application for report submission (web-based only initially)
Blockchain or cryptocurrency-specific analysis tools
8.3 Assumptions & Constraints
Regulatory Constraints:
Must comply with Liberian AML/CFT legislation
Must align with FATF Recommendation 29 (Financial Intelligence Unit standards)
Must maintain strict confidentiality and access controls
Operational Constraints:
FIA staff: approximately 30 total (10-12 compliance, 10-12 analysts)
Current infrastructure: email-based, Excel processing
Budget: Initial donor funding for development; annual maintenance via FIA budget
Timeline: 3-phase deployment over 15+ months
Technical Assumptions:
Reporting entities can produce Excel for manual or XML files for API consumption
Most banks/major entities can integrate via API within the rollout period.
FIA has basic internet connectivity and computer infrastructure
System will be locally deployed (not cloud-based initially)
Staff will receive training on new digital workflows

📘 Feature Requirements
PHASE 1 FEATURES (Months 1-8)
Feature 1: Digital Report Submission Portal
User Story
As a compliance officer at a reporting entity,
 I want to submit STRs and CTRs digitally through Excel,
 so that I can eliminate email submissions and receive instant validation feedback.
Functional Requirements
FR-1.1: The system shall accept manual submission upload through excel as a fall back submission method
FR-1.2: The system shall provide standardized Excel templates for STR and CTR report types that reporting entities can download.
FR-1.3: The system shall generate a unique submission reference number immediately upon successful upload.
FR-1.4: The system shall display submission confirmation with timestamp and reference number to the submitting entity.
FR-1.5: The system shall allow reporting entities to track the status of their submitted reports (Submitted, Validated, Rejected, Under Review).
FR-1.6: The system shall prevent duplicate submissions by validating entity-provided report and transaction identifiers prior to generating a system reference number, and shall block submissions that match previously submitted report content.
FR-1.7: The system shall log all submission attempts including entity name, timestamp, file size, and format type.
FR-1.8: The system shall allow reporting entities to correctly classify reports as either STR or CTR during submission.
Acceptance Criteria
AC-1.1: Given a valid Excel CTR/STR file, when a compliance officer uploads it, then the system generates a unique reference number within 3 seconds.
AC-1.2: Given a duplicate report reference number, when submission is attempted, then the system displays a clear duplicate warning and prevents submission.
AC-1.3: Given a submitted report, when the compliance officer checks status, then the system displays the current workflow stage and timestamp.
AC-1.4: Given a reporting entity submits a report classified as "CTR," when the report enters the system, then it follows the CTR workflow path (Compliance Review before any potential Analysis).
Tests (Conceptual)
Test Case 1.1 - Successful Excel Upload:
Input: Valid STR Excel file (5 transactions, all mandatory fields complete)
Expected: Submission success message, unique reference number displayed, status = "Submitted," report classified as STR
Test Case 1.2 - Duplicate Prevention:
Input: Same report reference number submitted twice within 24 hours
Expected: Second submission blocked, error message: "Report [REF] already submitted on [DATE]"
Test Case 1.3 - Format Flexibility:
Input: Same transaction data submitted as Excel, then XML
Expected: Both formats accepted if valid, unique references assigned to each
Test Case 1.4 - Status Tracking:
Input: User queries submission reference number
Expected: Display current status (e.g., "Validated - Assigned to Compliance Officer Jane Doe" for CTR or "Validated - Assigned to Analyst John Doe" for STR)
Test Case 1.5 - CTR vs STR Routing:
Input: Submit one report as CTR and one as STR
Expected: CTR enters Compliance Review workflow; STR bypasses Compliance Review and proceeds directly to Analysis workflow after validation
Edge Cases:
File size exceeds 50MB
Unsupported file format (.csv, .pdf)
Network interruption during upload
Submission outside business hours
Misclassification of report type (CTR submitted as STR or vice versa)

Feature FR-API: Digital Submission via API (goAML XML)
User Story
As a reporting entity’s compliance/IT team,
I want to submit STR/CTR reports automatically to SupTech365 via a secure API using goAML XML format,
so that submissions are reliable, standardized, and do not require manual email or Excel processes.

Functional Requirements
FR-API.1: The system shall provide a secure API endpoint for reporting entities to submit transaction reports in goAML XML format directly from their core banking system.
FR-API.2: The system shall require each reporting entity to be uniquely registered and issued API credentials prior to API submission access.
FR-API.3: The system shall authenticate every API submission request using an approved API authentication method (e.g., API key or equivalent) and reject unauthenticated requests.
FR-API.4: The system shall validate every API submission for goAML XML schema compliance and reject submissions that fail schema validation.
FR-API.5: The system shall validate that the report type declared in the API request matches the goAML XML content (STR/CTR) and flag mismatches for manual review or reject based on configured rules.
FR-API.6: The system shall return an immediate machine-readable response for each API submission, including at minimum:
Submission status (Accepted / Rejected / Received for Review)
Unique submission reference number (when accepted/received)
Timestamp
Validation error details (when rejected)
FR-API.7: The system shall enforce duplicate submission prevention for API submissions by checking reporting-entity report identifiers and key transaction identifiers, blocking duplicates according to defined deduplication rules.
FR-API.8: The system shall support an API submission status endpoint that allows reporting entities to query the current workflow status of a submission using the submission reference number.
FR-API.9: The system shall log all API submission events for audit purposes, including entity identity, timestamp, submission size, IP/source identifier (if available), and validation outcome.

FR-API.10: The system shall enforce rate limits per reporting entity to protect system availability and prevent abuse while preserving legitimate high-volume reporting use cases.
FR-API.11: The system shall support submission of large reports by defining maximum payload limits and providing a clear rejection message when exceeded.

Acceptance Criteria
AC-API.1: Given a reporting entity submits a valid goAML XML STR via the API with valid credentials, when the system receives the request, then the system returns Accepted and a unique submission reference number within 3 seconds.
AC-API.2: Given a reporting entity submits an invalid goAML XML (schema failure), when the system validates it, then the system returns Rejected with a machine-readable error response identifying the schema validation failure.
AC-API.3: Given a reporting entity submits without valid credentials, when the system receives the request, then the system returns Rejected and does not create a submission record.
AC-API.4: Given a reporting entity submits a duplicate report identifier previously submitted successfully, when the system receives the request, then the system returns Rejected with a clear duplicate message and does not create a new submission reference number.
AC-API.5: Given a submission reference number exists, when the reporting entity queries the status endpoint, then the system returns the current workflow status and last-updated timestamp.


Tests (Conceptual)
Test Case API-1 — Successful API Submission (STR):
Input: Valid goAML XML STR + valid credentials
Expected: Response = Accepted; reference number returned; status = Submitted/Received; audit log entry created
Test Case API-2 — Schema Validation Failure:
Input: goAML XML missing mandatory node/field
Expected: Response = Rejected; error includes missing node/field reference; no workflow routing occurs
Test Case API-3 — Authentication Failure:
Input: Valid goAML XML but invalid/expired credentials
Expected: Rejected; no submission reference generated; security log entry created
Test Case API-4 — Duplicate Submission Block:
Input: Same report identifier submitted twice
Expected: Second request rejected as duplicate; first submission remains unchanged
Test Case API-5 — Status Query:
Input: Query status endpoint with valid reference number
Expected: Returns workflow stage (e.g., Submitted, Validated, Under Review) and timestamps
Test Case API-6 — Rate Limit Enforcement:
Input: Reporting entity submits above allowed rate threshold in a short window
Expected: Requests beyond threshold rejected with rate-limit response; earlier accepted submissions remain processed

Edge Cases
Large XML payload exceeds maximum allowed size
Network timeout after entity submits (entity retries and triggers duplicate prevention)
Partial submissions or malformed XML encoding
Valid XML but mismatched declared report type vs. embedded report content
Multiple branches of same entity submitting concurrently (concurrency)


Feature 2: Automated Validation Engine
User Story
As the system,
 I want to automatically validate report file format and mandatory fields,
 so that only technically correct reports reach FIA officers for manual review.
Functional Requirements
FR-2.1: The system shall automatically validate file format (Excel: .xlsx/.xls; XML: GoAML schema compliance) within 10 seconds of submission.
FR-2.2: The system shall check for presence of all mandatory fields defined for each report type (STR, CTR).
FR-2.3: The system shall validate data types for each field (dates as dates, amounts as numbers, IDs as text).
FR-2.4: The system shall verify that report type classification matches content (STR vs CTR) and flag mismatches for manual review.
FR-2.5: The system shall automatically reject reports that fail format or mandatory field validation without human intervention.
FR-2.6: The system shall generate a detailed validation error report listing each specific failure (field name, issue type, location).
FR-2.7: The system shall send automated rejection notifications to submitting entity with error details within 10 seconds of validation failure.
FR-2.8: The system shall pass reports that succeed automated validation to the manual validation queue (data clerk queue).
FR-2.9: The system shall log all validation outcomes (pass/fail, error types, timestamp) for audit purposes.
FR-2.10: The system shall route validated reports to appropriate queues based on report type: CTRs to compliance officer queue (for Compliance workflow), STRs to analysis queue (for direct Analysis workflow).
Acceptance Criteria
AC-2.1: Given a report with missing mandatory field "Beneficiary Name," when validation runs, then the system auto-rejects with error message identifying the specific missing field.
AC-2.2: Given a report with all mandatory fields and correct format, when validation runs, then the system moves report to data clerk validation queue within 5 seconds.
AC-2.3: Given an auto-rejected report, when the submitting entity checks status, then they see the detailed error list explaining each validation failure.
AC-2.4: Given a CTR that passes automated validation, when routed to manual validation, then it appears in the data clerk queue designated for CTR processing.
AC-2.5: Given an STR that passes automated validation, when routed to manual validation, then it appears in the data clerk queue designated for STR processing.
Tests (Conceptual)
Test Case 2.1 - Missing Mandatory Fields:
Input: STR with empty "Transaction Date" field
Expected: Auto-rejection, error message: "Mandatory field 'Transaction Date' is missing in Row 3"
Test Case 2.2 - Invalid Data Type:
Input: CTR with text "five thousand" in Amount field instead of number 5000
Expected: Auto-rejection, error message: "Field 'Amount' must be numeric. Found 'five thousand' in Row 2"
Test Case 2.3 - Format Corruption:
Input: Corrupted .xlsx file (incomplete download)
Expected: Auto-rejection, error message: "File format corrupted or unreadable"
Test Case 2.4 - Successful Validation:
Input: Fully compliant CTR with all mandatory fields, correct types
Expected: Validation pass, report appears in data clerk validation queue for CTR workflow, submitter notified
Test Case 2.5 - Report Type Routing:
Input: One STR and one CTR, both passing automated validation
Expected: CTR routed to Compliance workflow queue; STR routed to Analysis workflow queue
Edge Cases:
Optional fields contain invalid data types
Date fields with impossible dates (e.g., February 30)
Negative amounts in transaction value fields
Special characters in text fields causing encoding issues
Report classified as CTR but contains STR indicators (flagged for manual review)

Feature 3: Manual Validation Workflow
User Story
As a data clerk or compliance officer,
 I want to review report content quality after automated checks pass,
 so that I can ensure narratives are clear and reports are usable before they proceed in the workflow.
Functional Requirements
FR-3.1: The system shall present data clerks with a queue of reports that passed automated validation, ordered by submission timestamp.
FR-3.2: The system shall display the full report content in a readable format for data clerk review.
FR-3.3: The system shall allow data clerks to add review notes or comments visible to other FIA staff.
FR-3.4: The system shall require the data clerk to make one decision per report: Accept, Return for Correction, or Reject.
FR-3.5: The system shall require a mandatory text reason when choosing "Return for Correction" or "Reject."
FR-3.6: The system shall prevent reports from proceeding to the next stage until data clerk validation is completed and accepted.
FR-3.7: The system shall notify the submitting entity when their report is accepted, returned, or rejected, including the data clerk's reason.
FR-3.8: The system shall log the data clerk's identity, decision, timestamp, and reason for every validation decision.
FR-3.9: The system shall allow returned reports to be resubmitted by the reporting entity with corrections.
FR-3.10: The system shall track resubmission attempts and link them to original submission reference.
FR-3.11: The system shall distinguish between data clerk validation (format and data entry quality) and compliance officer validation (regulatory conformity and red-flag assessment).
FR-3.12: The system shall require that data clerks complete initial validation before reports reach compliance officers for regulatory review.
FR-3.13: The system shall route CTRs from data clerk validation directly to compliance officer queues for regulatory review and escalation consideration.
FR-3.14: The system shall route STRs from data clerk validation directly to analyst assignment queues, bypassing compliance officer review.
FR-3.15: The system shall present compliance officers with a queue of CTRs that have passed data clerk validation, ordered by submission timestamp.
FR-3.16: The system shall allow compliance officers to flag CTRs for potential escalation to STR status with documented justification.
FR-3.17: The system shall display compliance officers' flagged CTRs in Compliance Officer Supervisor review queues for escalation decision.
Acceptance Criteria
AC-3.1: Given a report in the data clerk validation queue, when the clerk selects "Reject" without providing a reason, then the system displays an error and prevents submission of the decision.
AC-3.2: Given an accepted CTR by a data clerk, when validation is complete, then the report appears in the Compliance Officer review queue within 2 seconds.
AC-3.3: Given an accepted STR by a data clerk, when validation is complete, then the report appears in the analyst assignment queue within 2 seconds (bypassing Compliance review).
AC-3.4: Given a returned report, when the reporting entity resubmits with corrections, then the system links both versions and shows resubmission in validation queue.
AC-3.5: Given a compliance officer flags a CTR for escalation, when the flag is submitted, then the CTR appears in the Compliance Officer Supervisor's escalation review queue with the officer's justification visible.
AC-3.6: Given a CTR is not flagged for escalation by compliance officer, when the review is completed, then the CTR is archived or marked for monitoring without proceeding to Analysis.
Tests (Conceptual)
Test Case 3.1 - Data Clerk Accepts Valid Report:
Input: Data clerk reviews STR with clear data quality, selects "Accept"
Expected: Report moves to analyst assignment queue (bypassing Compliance), submitter receives acceptance notification, log entry created
Test Case 3.2 - Data Clerk Returns for Correction:
Input: Data clerk selects "Return," enters reason: "Date format inconsistent in transaction rows"
Expected: Report status = "Returned," entity receives notification with reason, report removed from queue
Test Case 3.3 - Reject Without Reason:
Input: Data clerk selects "Reject" but leaves reason field empty
Expected: Error message: "Reason is mandatory for rejection," decision not saved
Test Case 3.4 - Resubmission Tracking:
Input: Entity resubmits corrected version of previously returned report
Expected: System shows "Resubmission #1" badge, links to original, enters data clerk validation queue
Test Case 3.5 - CTR Compliance Review:
Input: Data clerk accepts CTR, passes to compliance officer
Expected: CTR appears in compliance officer queue, officer reviews for red flags and escalation potential
Test Case 3.6 - Compliance Officer Flags CTR for Escalation:
Input: Compliance officer reviews CTR with structuring pattern, flags for escalation with reason "Multiple deposits just below $10,000 threshold"
Expected: CTR appears in Compliance Officer Supervisor queue with escalation recommendation and justification
Test Case 3.7 - STR Bypasses Compliance Review:
Input: Data clerk accepts STR
Expected: STR skips compliance officer queue entirely, goes directly to Head of Analysis assignment queue
Edge Cases:
Data clerk starts review but doesn't complete decision (timeout handling)
Multiple clerks/officers attempt to review same report simultaneously
Report returned multiple times (3+ iterations)
CTR flagged by compliance officer while supervisor is reviewing different escalation

Feature 4: Task Assignment & Workload Distribution
User Story (Primary)
As a Compliance Officer Supervisor or Head of Compliance,
 I want to assign CTRs to compliance officers and monitor workload distribution across my team,
 so that all reports are processed efficiently.
User Story (Additional)
As a Head of Analysis,
 I want to assign STRs to analysts and monitor workload distribution across the analysis team,
 so that investigations are balanced and no analyst is overwhelmed.
Functional Requirements
FR-4.1: The system shall allow Compliance Officer Supervisors to manually assign validated CTRs to specific compliance officers with a deadline.
FR-4.2: The system shall allow Head of Analysis to manually assign validated STRs and escalated CTRs to specific analysts with a deadline.
FR-4.3: The system shall display each compliance officer's current workload count (assigned CTRs).
FR-4.4: The system shall display each analyst's current workload count (assigned STRs and escalated CTRs, plus active cases).
FR-4.5: The system shall allow supervisors to reassign reports from one officer/analyst to another with documented reason.
FR-4.6: The system shall notify compliance officers and analysts immediately when a new report is assigned to them.
FR-4.7: The system shall prevent compliance officers from accessing CTRs not assigned to them unless explicitly granted permission.
FR-4.8: The system shall prevent analysts from accessing reports not assigned to them unless explicitly granted permission.
FR-4.9: The system shall track time from assignment to completion for performance metrics.
FR-4.10: The system shall display separate dashboards showing:
Compliance dashboard: All CTR assignments by compliance officer, status, and age (days since assignment)
Analysis dashboard: All STR/escalated CTR assignments by analyst, status, and age
FR-4.11: The system shall flag reports that have been assigned for more than 10 days without status change.
FR-4.12: The system shall support two separate assignment workflows:
CTR Assignment Workflow managed by Compliance Officer Supervisors and Head of Compliance
STR Assignment Workflow managed by Head of Analysis
FR-4.13: The system shall allow Compliance Officer Supervisors to assign CTRs to compliance officers within their team.
FR-4.14: The system shall allow Head of Compliance to reassign CTRs across compliance officer supervisors' teams when workload balancing is needed.
FR-4.15: The system shall allow Head of Analysis to assign STRs (including escalated CTRs) to analysts within the analysis department.
FR-4.16: The system shall display separate workload dashboards for:
Compliance side: CTRs assigned to data clerks and compliance officers
Analysis side: STRs and escalated CTRs assigned to analysts
FR-4.17: The system shall allow Director of Operations to view combined workload across both compliance and analysis departments.
FR-4.18: The system shall provide auto-assignment functionality for both CTR and STR workflows based on lowest current workload.
Acceptance Criteria
AC-4.1: Given 5 analysts with workloads of 10, 8, 12, 9, and 7 reports respectively, when Head of Analysis chooses "Auto-Assign" for an STR, then the system assigns the STR to the analyst with 7 reports.
AC-4.2: Given a report assigned to Analyst A, when Analyst B attempts to open it, then the system displays "Access Denied - Not assigned to you."
AC-4.3: Given a report assigned crosses the deadline and it's not complete, when supervisor views dashboard, then the report appears highlighted in red with "Overdue" flag.
AC-4.4: Given 4 compliance officers with workloads of 15, 12, 18, and 10 CTRs respectively, when Compliance Officer Supervisor chooses "Auto-Assign" for a validated CTR, then the system assigns the CTR to the compliance officer with 10 reports.
AC-4.5: Given a CTR is escalated to STR status by Head of Compliance, when the escalation is finalized, then the system removes the report from compliance workload counts and adds it to analysis assignment queue.
AC-4.6: Given Director of Operations views the combined dashboard, when accessing the interface, then they can see both compliance CTR workloads and analysis STR workloads in a unified view.
Tests (Conceptual)
Test Case 4.1 - Manual CTR Assignment (Compliance):
Input: Compliance Officer Supervisor selects CTR and assigns to "Compliance Officer Jane Doe" with deadline
Expected: CTR appears in Jane's queue, Jane receives notification, compliance dashboard updates
Test Case 4.2 - Manual STR Assignment (Analysis):
Input: Head of Analysis selects STR and assigns to "Analyst John Smith" with deadline
Expected: STR appears in John's queue, John receives notification, analysis dashboard updates
Test Case 4.3 - Reassignment Within Compliance:
Input: Compliance Officer Supervisor reassigns CTR from Officer A (sick leave) to Officer B, reason: "Medical leave coverage"
Expected: CTR removed from A's queue, added to B's queue, both notified, reason logged
Test Case 4.4 - Escalated CTR Assignment:
Input: Head of Compliance escalates CTR to STR status; Head of Analysis assigns to analyst
Expected: Report removed from compliance workload, appears in analyst's queue as "Escalated CTR," analyst receives full context including original CTR data and escalation justification
Test Case 4.5 - Auto-Assignment (CTR):
Input: System runs auto-assign for 3 incoming validated CTRs with 5 active compliance officers
Expected: CTRs distributed to officers with lowest workloads, all officers notified
Test Case 4.6 - Auto-Assignment (STR):
Input: System runs auto-assign for 2 incoming validated STRs with 5 active analysts
Expected: STRs distributed to analysts with lowest workloads (counting both STRs and escalated CTRs)
Test Case 4.7 - Overdue Flagging:
Input: System runs daily check, finds CTRs and STRs assigned >10 days ago
Expected: Both compliance and analysis dashboards show red flags for respective overdue reports, supervisors receive overdue report lists
Test Case 4.8 - Cross-Department Visibility:
Input: Director of Operations opens combined workload dashboard
Expected: Dashboard shows compliance side (CTRs in progress, escalation rate) and analysis side (STRs being investigated, case opening rate)
Edge Cases:
Analyst reassignment while report is actively being reviewed
CTR escalated while compliance officer is simultaneously reviewing it
Report completed but supervisor hasn't approved case proposal
Head of Compliance reassigns CTR across different supervisor teams
Escalated CTR appears in analyst's queue before Head of Analysis assigns it

Feature 5: Subject Profiling Tool
User Story
As an analyst,
 I want to see all historical reports (both STRs and CTRs) associated with a person, company, or account across the entire database,
 so that I can identify patterns, repeated behaviors, and connections over time.
Functional Requirements
FR-5.1: The system shall create persistent subject profiles for persons, companies, and accounts mentioned in any report (STR or CTR).
FR-5.2: The system shall automatically link new reports to existing subject profiles when matching identifiers are detected (name, ID number, account number).
FR-5.3: The system shall display a subject profile page showing all associated reports in chronological order, including report type (STR, CTR, Escalated CTR).
FR-5.4: The system shall show key subject attributes: full name, identification numbers, addresses, associated accounts, associated entities.
FR-5.5: The system shall calculate and display summary statistics per subject: total reports involving subject (by type: STR, CTR, Escalated CTR), total transaction value, date range of activity.
FR-5.6: The system shall allow analysts to manually merge duplicate subject profiles when the same person/entity was entered with slight variations.
FR-5.7: The system shall allow analysts to create relationship links between subjects (e.g., "Company Director," "Spouse," "Business Partner").
FR-5.8: The system shall display a visual timeline of all transactions involving a subject across all reports (STRs, CTRs, and escalated CTRs).
FR-5.9: The system shall flag subjects appearing in 3 or more reports within a 6-month period for analyst attention.
FR-5.10: The system shall allow analysts to add investigative notes to subject profiles visible to all FIA staff.
FR-5.11: The system shall allow analysts to view CTR data for subjects only when: (a) the CTR has been escalated to their workflow, or (b) the subject appears in an STR currently assigned to them.
FR-5.12: The system shall display escalation status on CTR entries in subject profiles (e.g., "CTR - Escalated" vs. "CTR - Archived").
Acceptance Criteria
AC-5.1: Given a subject "John Mensah" appears in 2 STRs, 3 CTRs (1 escalated), over 8 months, when an analyst searches "John Mensah," then the system displays a profile showing all 5 reports with dates, transaction totals, and report type labels (STR, CTR, Escalated CTR).
AC-5.2: Given two profiles "ABC Trading Co." and "ABC Trading Company Ltd." refer to the same entity, when an analyst merges them, then all reports (STRs and CTRs) from both profiles appear under a single consolidated profile.
AC-5.3: Given a subject appears in 4 reports (2 STRs, 2 CTRs) within 5 months, when the analyst views the subject list, then the subject appears with a "High Frequency" flag.
AC-5.4: Given an analyst is assigned an STR mentioning subject "Sarah Konneh," when viewing Sarah's profile, then the analyst can see historical CTRs involving Sarah only if those CTRs were escalated or Sarah appears in the assigned STR.
AC-5.5: Given a subject profile contains 2 non-escalated CTRs and 3 STRs, when a compliance officer (not analyst) views the profile, then they see all 5 reports; when an analyst views the profile, they see only the 3 STRs unless the CTRs were escalated.
Tests (Conceptual)
Test Case 5.1 - Automatic Profile Creation (Mixed Report Types):
Input: New STR submitted mentioning "Sarah Konneh, ID: LIB123456"
Expected: System creates subject profile for Sarah Konneh, links STR, stores ID number, displays report type as "STR"
Test Case 5.2 - Historical Report Linking (CTR):
Input: CTR submitted 3 months later with same ID "LIB123456"
Expected: System links to existing Sarah Konneh profile, now shows 2 reports (1 STR, 1 CTR), updated date range, CTR labeled appropriately
Test Case 5.3 - Profile Merge (Cross-Report Types):
Input: Analyst identifies "J. Smith" (mentioned in STR) and "John Smith ID:789" (mentioned in CTR) as same person, initiates merge
Expected: Single profile created, all reports from both (STRs and CTRs) appear together, merge action logged
Test Case 5.4 - Transaction Timeline (All Report Types):
Input: Analyst views profile for "Diamond Mining Ltd"
Expected: Visual timeline shows 8 transactions across 2 STRs and 2 CTRs (1 escalated) spanning 12 months, each transaction plotted by date with report type indicator
Test Case 5.5 - High-Frequency Flagging (Mixed Reports):
Input: Subject appears in 4th report (2 STRs, 2 CTRs) within 6-month window
Expected: Profile gains "High Frequency Activity" badge, appears in priority review list
Test Case 5.6 - CTR Access Control for Analysts:
Input: Analyst assigned STR involving "John Doe" views John's profile containing 2 non-escalated CTRs and 1 escalated CTR
Expected: Profile shows the STR and the 1 escalated CTR; the 2 non-escalated CTRs are hidden or marked as "Access Restricted - Compliance Only"
Test Case 5.7 - Escalation Status Display:
Input: Subject profile contains 3 CTRs: one archived, one monitored, one escalated
Expected: Profile clearly labels each: "CTR - Archived," "CTR - Under Monitoring," "CTR - Escalated to Analysis"
Edge Cases:
Subject name spelled differently across reports
Multiple subjects with same common name but different IDs
Subject appearing in 100+ reports across both CTRs and STRs (performance test)
Profile merge with conflicting attribute values
Analyst attempts to access subject profile containing only non-escalated CTRs (should see limited/no data)

Feature 6: Rule-Based Analysis & Alert Generation
User Story
As an analyst or compliance officer,
 I want the system to automatically flag reports matching predefined suspicious patterns,
 so that I can prioritize high-risk activity instead of manually reviewing every report.
Functional Requirements
FR-6.1: The system shall allow Compliance Officer Supervisors to define compliance-level alert rules for CTR processing (e.g., "If CTR amount >$15,000 and near threshold, generate Medium Risk alert").
FR-6.2: The system shall allow Head of Analysis to define analysis-level alert rules for STR and escalated CTR investigation (e.g., "If subject is PEP and transaction >$50,000, generate High Risk alert").
FR-6.3: The system shall automatically apply all active compliance-level rules to CTRs immediately after data clerk validation.
FR-6.4: The system shall automatically apply all active analysis-level rules to STRs and escalated CTRs immediately after validation/escalation.
FR-6.5: The system shall generate alerts when rule conditions are met, assigning risk levels: Low, Medium, High, Critical.
FR-6.6: The system shall display generated compliance-level alerts on compliance officers' dashboards for CTR review.
FR-6.7: The system shall display generated analysis-level alerts on analysts' dashboards for STR/escalated CTR investigation.
FR-6.8: The system shall allow compliance officers and analysts to view the specific rule logic that triggered each alert.
FR-6.9: The system shall allow compliance officers and analysts to mark alerts as "True Positive," "False Positive," or "Under Investigation."
FR-6.10: The system shall support combination rules (e.g., "Subject in 3+ CTRs AND total value >$50,000 in 30 days").
FR-6.11: The system shall provide 10 pre-configured common AML rules covering both compliance-level patterns (structuring, threshold proximity) and analysis-level patterns (PEP involvement, high-risk jurisdictions).
FR-6.12: The system shall log all rule executions and alert generations for audit purposes.
FR-6.13: The system shall allow Compliance Officer Supervisors and Head of Analysis to deactivate, modify, or delete rules within their respective domains with documented justification.
FR-6.14: The system shall support two types of alert rules:
Compliance-level alerts for CTR red-flag detection (e.g., structuring patterns, threshold proximity)
Analysis-level alerts for STR and escalated CTR risk assessment (e.g., PEP involvement, high-risk jurisdictions)
FR-6.15: The system shall prevent compliance-level alert rules from triggering on STRs (which bypass compliance review).
FR-6.16: The system shall apply relevant analysis-level alert rules to escalated CTRs upon escalation.
Acceptance Criteria
AC-6.1: Given a compliance-level rule "CTR amount >$15,000 = High Risk," when a CTR with $20,000 is validated, then the system generates a High Risk alert visible on compliance officer dashboard within 1 minute.
AC-6.2: Given an analysis-level rule "Subject is PEP = Critical," when an STR with PEP subject is validated, then the system generates a Critical alert visible on analyst dashboard within 1 minute.
AC-6.3: Given an analyst marks an analysis-level alert as "False Positive," when reviewing rule performance, then the system shows the false positive rate for that rule.
AC-6.4: Given 3 active compliance-level rules and 2 active analysis-level rules, when a new CTR is validated, then the system applies only the 3 compliance-level rules.
AC-6.5: Given 3 active compliance-level rules and 2 active analysis-level rules, when a new STR is validated, then the system applies only the 2 analysis-level rules.
AC-6.6: Given a CTR is escalated to Analysis, when escalation is finalized, then the system applies analysis-level rules and generates relevant alerts for the assigned analyst.
AC-6.7: Given Head of Analysis creates a rule "Escalated CTR + high-risk jurisdiction = High Risk," when a CTR from sanctioned country is escalated, then the analyst receives High Risk alert with justification.
Tests (Conceptual)
Test Case 6.1 - Compliance-Level Rule Trigger:
Input: Compliance-level rule "Transaction to high-risk country = Medium Risk," CTR submitted with beneficiary in high-risk country
Expected: Medium Risk alert generated, appears on compliance officer dashboard for escalation consideration
Test Case 6.2 - Analysis-Level Rule Trigger:
Input: Analysis-level rule "STR + subject in 3+ reports = High Risk," STR submitted for subject appearing in 4 total reports
Expected: High Risk alert generated, appears on analyst dashboard
Test Case 6.3 - Combination Rule (Compliance):
Input: Compliance rule "CTR amount just below $10,000 + subject in 3+ CTRs within 30 days = Critical (Structuring Pattern)"
Scenario: Subject's 3rd CTR in 28 days, each $9,500
Expected: Critical alert generated for compliance officer review with "Potential Structuring" label
Test Case 6.4 - Combination Rule (Analysis):
Input: Analysis rule "Subject in 3+ escalated CTRs within 30 days + total value >$25,000 = High Risk"
Scenario: Subject's 3rd escalated CTR in 28 days pushes total to $30,000
Expected: High Risk alert generated immediately upon 3rd escalation
Test Case 6.5 - Pre-Configured Rules (Mixed):
Input: System deployed with 10 default rules (5 compliance-level, 5 analysis-level) active
Test: Submit CTRs and STRs matching each rule type
Expected: Compliance rules trigger only on CTRs; analysis rules trigger only on STRs/escalated CTRs
Test Case 6.6 - False Positive Handling:
Input: Compliance officer reviews alert "Round amount $10,000 = Medium Risk" on CTR, determines legitimate payroll transaction, does not escalate
Action: Marks alert as "False Positive" with note "Verified payroll transaction"
Expected: Alert status updated, rule performance metrics adjusted, CTR archived without escalation
Test Case 6.7 - Escalated CTR Alert Generation:
Input: CTR with PEP subject escalated by Head of Compliance
Expected: Upon escalation, analysis-level rule "PEP subject = Critical" triggers, analyst receives Critical alert with both original CTR data and escalation context
Test Case 6.8 - Rule Domain Separation:
Input: Compliance Officer Supervisor attempts to modify analysis-level rule
Expected: System prevents modification, displays "Permission Denied - Analysis rules managed by Head of Analysis"
Test Case 6.9 - Rule Modification:
Input: Head of Analysis changes rule threshold from "$10,000" to "$15,000," saves with reason "Reduce false positives based on 3-month review"
Expected: Rule updated, change logged with timestamp and reason, new STRs use updated threshold
Edge Cases:
Report triggers 5+ rules simultaneously across both compliance and analysis levels
Rule with impossible logic (contradictory conditions)
Very complex combination rule impacting system performance
Rule modification while alerts from old rule version still pending review
Escalated CTR triggering both old compliance-level alerts and new analysis-level alerts (system should prioritize analysis-level)


Feature 7: Workflow Management (Validate → Review → Analyze → Approve → Case → Intelligence → Dissemination)
performance
Rule modification while alerts from old rule version still pending review
Escalated CTR triggering both old compliance-level alerts and new analysis-level alerts (system should prioritize analysis-level)

Feature 7: Workflow Management
User Story
As the system,
 I want to enforce structured lifecycles for CTRs and STRs from submission to completion,
 so that regulatory processes are followed consistently and audit trails are complete.
Functional Requirements
FR-7.1: The system shall enforce two mandatory sequential workflows:
For CTRs:
 Submit → Automated Validation → Data Clerk Validation → Compliance Review → [Decision: Archive / Monitor / Escalate to Analysis]
 (If escalated, proceeds to Analysis workflow as "Escalated CTR")
For STRs and Escalated CTRs:
 Submit → Automated Validation → Data Clerk Validation → Analyze → Approve → Case → Intelligence → Dissemination
FR-7.2: The system shall prevent reports from skipping stages within their designated workflow (e.g., cannot go from Validate directly to Analyze for STRs).
FR-7.3: The system shall allow reports to return to previous stages when returned for additional work (e.g., Approve stage returns to Analyze).
FR-7.4: The system shall display the current workflow stage and workflow type (CTR path or STR path) for each report on all dashboards and report views.
FR-7.5: The system shall record timestamp and responsible officer for each stage transition in both workflows.
FR-7.6: The system shall calculate and display time spent in each workflow stage for performance monitoring, separated by workflow type.
FR-7.7: The system shall allow Compliance Officer Supervisors to view all CTRs at each CTR workflow stage simultaneously.
FR-7.8: The system shall allow Head of Analysis to view all STRs and escalated CTRs at each Analysis workflow stage simultaneously.
FR-7.9: The system shall send automated reminders when reports remain in a stage beyond defined time thresholds (e.g., >5 days in Compliance Review for CTRs, >7 days in Analyze for STRs).
FR-7.10: The system shall generate workflow audit reports showing complete lifecycle history for any report, including workflow transitions between CTR and STR paths.
FR-7.11: The system shall prevent deletion or modification of stage transition logs.
FR-7.12: The system shall clearly distinguish CTR workflow stages (Compliance Review, Archive/Monitor/Escalate Decision) from STR/Analysis workflow stages (Analyze, Approve, Case, Intelligence, Dissemination) in all interfaces.
FR-7.13: The system shall allow Director of Operations to view reports across both CTR and STR workflows in a unified executive dashboard.
Acceptance Criteria
AC-7.1: Given a validated STR, when attempting to move it directly to Case stage, then the system prevents the action and displays "Must complete Analyze and Approve stages first."
AC-7.2: Given a validated CTR, when it enters workflow, then the system routes it to Compliance Review stage (not directly to Analysis).
AC-7.3: Given a CTR at Compliance Review stage, when compliance officer selects "Escalate," then the CTR transitions to "Escalated CTR" status and enters the Analysis workflow at the Analyze stage.
AC-7.4: Given a report at Approve stage, when supervisor selects "Return to Analyst," then report moves back to Analyze stage and original analyst is notified.
AC-7.5: Given a CTR completed through Archive decision, when viewing audit trail, then the system displays CTR workflow stages with timestamps, responsible officers, and final disposition (Archive/Monitor/Escalate).
AC-7.6: Given an escalated CTR that later becomes disseminated intelligence, when viewing complete audit trail, then the system shows both CTR workflow history AND subsequent Analysis workflow history with clear transition point marked "Escalated by [Officer Name] on [Date]."
AC-7.7: Given a report in Compliance Review for 6 days, when daily check runs, then compliance officer receives automated reminder notification.
AC-7.8: Given Director of Operations views executive dashboard, when accessing workflow summary, then dashboard displays both CTR processing metrics (escalation rate, avg compliance review time) and STR processing metrics (case opening rate, avg analysis time).
Tests (Conceptual)
Test Case 7.1 - CTR Sequential Enforcement:
Input: Attempt to promote validated CTR directly to Case stage
Expected: Error message "CTRs must complete Compliance Review before escalation to Analysis," report remains in Compliance Review stage
Test Case 7.2 - STR Sequential Enforcement:
Input: Attempt to promote validated STR directly to Case stage (skipping Analyze/Approve)
Expected: Error message "Must complete Analyze and Approve stages first," report remains in appropriate stage
Test Case 7.3 - CTR Workflow Completion (Archive):
Input: CTR moves through: Submit → Auto-Validate → Data Clerk Validate → Compliance Review → Archive Decision
Expected: Workflow complete, CTR marked "Archived," no further stages required, complete audit trail logged
Test Case 7.4 - CTR Escalation Transition:
Input: CTR in Compliance Review → Compliance Officer flags → Compliance Officer Supervisor approves escalation
Expected: Report status changes to "Escalated CTR," enters Analysis workflow at Analyze stage, analyst assigned receives notification with full CTR context
Test Case 7.5 - STR Complete Lifecycle:
Input: STR moves through: Submit → Auto-Validate → Data Clerk Validate → Analyze → Approve → Case → Intelligence → Dissemination
Expected: Complete 8-stage STR workflow logged, each stage shows officer name, decision, timestamp, duration
Test Case 7.6 - Escalated CTR Complete Lifecycle:
Input: CTR escalated after Compliance Review, then continues through Analysis workflow to Dissemination
Expected: Audit trail shows: (CTR stages) Submit → Validate → Compliance Review → Escalation Decision, then (Analysis stages) Analyze → Approve → Case → Intelligence → Dissemination, with clear "Escalated on [Date]" marker
Test Case 7.7 - Stage Transition Logging (CTR):
Input: CTR moves from Data Clerk Validation to Compliance Review
Expected: Log entry created with: timestamp, previous stage (Data Clerk Validation), new stage (Compliance Review), officer name (Compliance Officer Jane Doe), transition reason if applicable
Test Case 7.8 - Stage Transition Logging (Escalation):
Input: CTR escalated from Compliance to Analysis
Expected: Log entry shows: "Escalated by Compliance Officer Supervisor John Smith on 2026-01-15, Reason: Structuring pattern detected, approved by Head of Compliance," plus automatic assignment to Head of Analysis queue
Test Case 7.9 - Return to Previous Stage:
Input: Supervisor at Approve stage (for STR) selects "Return to Analyze" with reason "Need additional bank records"
Expected: Report status = Analyze, analyst notified, reason visible in workflow history, time-in-Approve calculated and logged
Test Case 7.10 - Time-in-Stage Calculation (Separate Workflows):
Input: CTR in Compliance Review for 7 days; STR in Analyze for 9 days
Expected: Compliance dashboard shows "7 days in Compliance Review" for CTR; Analysis dashboard shows "9 days in Analyze" for STR; both trigger reminders per configured thresholds
Test Case 7.11 - Workflow Type Visibility:
Input: View list of 20 reports (10 CTRs, 10 STRs) in various stages
Expected: Dashboard clearly labels each report with workflow type: "CTR - Compliance Review," "STR - Analyze," "Escalated CTR - Approve," etc.
Test Case 7.12 - Director Executive View:
Input: Director of Operations opens executive workflow dashboard
Expected: Dashboard displays:
CTR Workflow Summary: Total CTRs submitted, % in Compliance Review, % Archived, % Monitored, % Escalated
Analysis Workflow Summary: Total STRs + Escalated CTRs in Analysis, % in each stage, case opening rate
Combined Metrics: Overall processing time (CTR compliance + STR analysis), total intelligence disseminated
Edge Cases:
Multiple return loops (Approve returns to Analyze 3 times for STR)
Report stuck in limbo (assigned officer no longer with FIA)
Simultaneous stage transition attempts by different officers
CTR escalated while another compliance officer is simultaneously reviewing it
Workflow modification during active report processing
Escalated CTR returned to Compliance for additional context (should this be allowed? System should prevent or require special authorization)
Attempt to "un-escalate" a CTR after escalation (should be blocked with audit trail noting attempt)

Feature 8 (NEW): CTR Escalation Workflow
User Story
As a Compliance Officer Supervisor or Head of Compliance,
 I want to escalate suspicious CTRs to STR status and hand them off to the Analysis Department,
 so that high-risk transactions flagged during compliance review receive proper investigation.
Functional Requirements
FR-8.1: The system shall allow compliance officers to flag CTRs for potential escalation with documented justification.
FR-8.2: The system shall require Compliance Officer Supervisors to review escalation recommendations and approve or reject with documented reasoning.
FR-8.3: The system shall allow Head of Compliance to make final escalation decisions for CTRs, converting their status from CTR to "Escalated CTR" or "STR."
FR-8.4: The system shall automatically notify the Head of Analysis when a CTR is escalated, creating an assignment-ready item in the analysis workflow.
FR-8.5: The system shall maintain full audit trail showing:
Who flagged the CTR for escalation (compliance officer)
Who approved the escalation (supervisor or Head of Compliance)
When the escalation occurred
Documented justification for escalation
FR-8.6: The system shall allow Director of Operations to authorize escalations when there is disagreement between Head of Compliance and Head of Analysis on borderline cases.
FR-8.7: The system shall display escalation metrics on dashboards:
Compliance dashboard: CTR escalation rate (escalated CTRs / total CTRs processed)
Analysis dashboard: Escalated CTRs received vs. direct STR submissions
FR-8.8: The system shall preserve the original CTR data when escalated, while allowing analysts to add additional investigation findings.
FR-8.9: The system shall prevent compliance officers from escalating CTRs without supervisor-level approval.
FR-8.10: The system shall allow Head of Compliance to review all escalation recommendations from all compliance officer supervisors before final approval.
FR-8.11: The system shall track escalation decision quality by linking escalated CTRs to eventual case outcomes (case opened, intelligence disseminated, or closed without action).
FR-8.12: The system shall provide escalation criteria guidelines visible to compliance officers when flagging CTRs.
Acceptance Criteria
AC-8.1: Given a compliance officer flags a CTR with reason "Multiple structured deposits just below $10,000 threshold," when the Compliance Officer Supervisor reviews and approves, then the CTR status changes to "Escalated" and Head of Analysis receives notification.
AC-8.2: Given a Compliance Officer Supervisor rejects an escalation recommendation, when the decision is saved, then the compliance officer receives notification with the rejection reason and the CTR remains in compliance workflow with status "Escalation Denied - Archived."
AC-8.3: Given an escalated CTR is assigned to an analyst, when the analyst views the report, then they can see both the original CTR data and the compliance team's escalation justification.
AC-8.4: Given Head of Compliance reviews 5 escalation recommendations from different supervisors, when making final decisions, then the system allows bulk approval/rejection with individual documented reasons for each.
AC-8.5: Given a CTR is escalated and later results in case opening and dissemination, when reviewing escalation metrics, then the system displays this as a "successful escalation" contributing to escalation quality score.
AC-8.6: Given Director of Operations is reviewing a disputed escalation, when accessing the escalation review interface, then they can see both Head of Compliance's recommendation and Head of Analysis's concern with full context.
Tests (Conceptual)
Test Case 8.1 - Successful Escalation Flow:
Input: Compliance officer flags CTR for escalation with detailed justification "Subject has 3 CTRs in 90 days totaling $28,500, all just below $10,000"
Action: Compliance Officer Supervisor reviews and approves
Expected: CTR status = "Escalated," appears in Head of Analysis assignment queue, all audit trail entries logged (flagged by Officer A, approved by Supervisor B, escalated on [Date])
Test Case 8.2 - Escalation Rejection:
Input: Compliance officer flags CTR for escalation with reason "Large transaction"
Action: Compliance Officer Supervisor reviews, determines insufficient evidence, rejects with reason "Transaction is legitimate business expense per supporting documentation"
Expected: CTR status = "Escalation Denied - Archived," compliance officer receives rejection notification with reason, CTR removed from escalation queue
Test Case 8.3 - Escalation with Additional Context:
Input: Head of Compliance escalates CTR and adds note "Subject has 3 previous CTRs in 90 days from different branches"
Expected: Escalated CTR includes original data + escalation context visible to assigned analyst in dedicated "Escalation Justification" section
Test Case 8.4 - Head of Compliance Bulk Review:
Input: 8 CTRs flagged for escalation by various compliance officers across 3 supervisors
Action: Head of Compliance reviews all 8, approves 5, rejects 3 with individual reasons
Expected: 5 escalated CTRs enter Analysis queue with notifications; 3 rejected CTRs return to respective compliance officers with rejection reasons
Test Case 8.5 - Director Override:
Input: Head of Compliance recommends escalation for borderline CTR, Head of Analysis questions necessity citing capacity constraints, Director of Operations reviews
Expected: Director can make final escalation decision with documented justification visible to both departments, decision marked as "Director Authorization Required - Approved/Denied"
Test Case 8.6 - Escalation Metrics Tracking:
Input: Over 30 days, 100 CTRs processed, 8 escalated (8% escalation rate), of those 8: 5 result in cases opened, 2 intelligence disseminated, 1 closed without action
Expected: Compliance dashboard shows "8% escalation rate," escalation quality score "7/8 = 87.5% successful escalations" (cases opened or disseminated)
Test Case 8.7 - Escalation Criteria Guidance:
Input: Compliance officer clicks "Flag for Escalation" button
Expected: System displays pop-up with escalation criteria: "Consider escalation if: (1) Structuring patterns evident, (2) Subject in 3+ CTRs within 90 days, (3) High-risk jurisdiction involvement, (4) Red flags from compliance review"
Test Case 8.8 - Preserved CTR Data in Analysis:
Input: Analyst assigned escalated CTR reviews report
Expected: Analyst sees:
Original CTR Section: All original transaction data, submitting entity, dates (read-only)
Escalation Justification Section: Compliance officer's flagging reason, supervisor's approval reason, Head of Compliance's additional context
Analysis Section: Empty fields for analyst to add investigation findings, linked reports, risk assessment
Test Case 8.9 - Preventing Unauthorized Escalation:
Input: Compliance officer attempts to change CTR status to "Escalated" without going through supervisor approval workflow
Expected: System blocks action, displays "Escalation requires Supervisor approval. Use 'Flag for Escalation' to submit recommendation."
Test Case 8.10 - Escalation Audit Trail:
Input: Request complete audit trail for escalated CTR that resulted in disseminated intelligence
Expected: Audit trail shows:
CTR submitted by Bank A on [Date 1]
Auto-validated on [Date 1]
Data clerk validated on [Date 2]
Assigned to Compliance Officer Jane Doe on [Date 2]
Flagged for escalation by Jane Doe on [Date 3], reason: [Justification]
Reviewed by Compliance Officer Supervisor John Smith on [Date 4]
Approved for escalation by Supervisor on [Date 4], reason: [Approval justification]
Escalated by Head of Compliance on [Date 5], additional context: [Notes]
Assigned to Analyst Mary Johnson on [Date 6]
[Subsequent Analysis workflow stages...]
Edge Cases:
Compliance officer attempts to escalate CTR without documented reason (should be blocked)
CTR escalated while another compliance officer is simultaneously reviewing it (concurrent edit handling)
Escalation recommendation sits in supervisor queue for 15+ days (overdue escalation recommendation flagging)
Analyst assigned escalated CTR cannot access original CTR compliance review notes (permission issue - system should allow analyst to see compliance context)
Multiple escalation attempts for same CTR by different compliance officers (system should show "Already flagged for escalation by [Officer Name]")
Attempt to "un-escalate" a CTR after analyst has begun investigation (should require Director authorization and documented reason)
Head of Compliance disagrees with supervisor's escalation approval (should allow Head to override with documented reason)

PHASE 2 FEATURES (Months 9-14)
Feature 9: Ad-Hoc Search & Query
User Story
As an analyst,
 I want to search the entire report database (STRs, CTRs, and escalated CTRs) using flexible criteria,
 so that I can find related reports, subjects, or patterns not captured by automated rules.
Functional Requirements
FR-9.1: The system shall provide a search interface accepting multiple criteria: subject name, ID number, account number, date range, report type (STR, CTR, Escalated CTR), transaction amount, keywords.
FR-9.2: The system shall support wildcard searches (e.g., "John*" matches "John Smith" and "Johnny Doe").
FR-9.3: The system shall allow combination searches using AND/OR logic (e.g., "Subject = John AND Amount >$5,000 OR Report Type = STR").
FR-9.4: The system shall return search results within 5 seconds for databases containing up to 10,000 reports.
FR-9.5: The system shall display search results with key fields: report reference, report type (STR/CTR/Escalated CTR), subject name, transaction amount, date, current workflow stage.
FR-9.6: The system shall allow analysts to export search results to Excel or PDF.
FR-9.7: The system shall allow analysts to save frequently used search queries for reuse.
FR-9.8: The system shall log all searches performed including user identity, criteria, timestamp, and number of results returned.
FR-9.9: The system shall support fuzzy matching for names to account for spelling variations.
FR-9.10: The system shall display total count of matching records before showing paginated results.
FR-9.11: The system shall allow analysts to filter search results by workflow path (CTR workflow vs. Analysis workflow).
FR-9.12: The system shall respect access controls: analysts can search all STRs and escalated CTRs assigned to them or their team, but cannot search non-escalated CTRs unless authorized.
FR-9.13: The system shall allow compliance officers to search all CTRs regardless of escalation status within their authorized scope.
Acceptance Criteria
AC-9.1: Given a search for "Account Number = 123456," when the query executes, then the system returns all reports (STRs, CTRs, Escalated CTRs) mentioning that account number within 5 seconds.
AC-9.2: Given a saved search query "High-value STRs last 30 days," when analyst clicks the saved query, then the system executes the search with updated date range automatically.
AC-9.3: Given a search for "John*," when executed, then the system returns matches for "John Smith," "Johnny Doe," and "Johnson Trading."
AC-9.4: Given an analyst searches for subject "Sarah Konneh," when results display, then the analyst sees all STRs and escalated CTRs involving Sarah, but non-escalated CTRs are excluded (unless analyst has special authorization).
AC-9.5: Given a compliance officer searches for subject "Sarah Konneh," when results display, then the officer sees all CTRs (escalated and non-escalated) plus STRs involving Sarah.
AC-9.6: Given a search filtered by "Report Type = Escalated CTR," when executed, then results show only CTRs that have been escalated to Analysis, with escalation dates and justifications visible.
Tests (Conceptual)
Test Case 9.1 - Multi-Criteria Search (Mixed Report Types):
Input: Subject Name = "Sarah Konneh" AND Date Range = Jan 1 - Mar 31, 2026 AND Amount >$5,000
Expected: Returns 2 STRs and 1 escalated CTR matching all criteria, displays in results grid with report type clearly labeled
Test Case 9.2 - Wildcard Search:
Input: "ABC*" in company name field
Expected: Returns "ABC Trading" (STR), "ABC Ltd." (CTR - escalated), "ABCD Corporation" (STR)
Test Case 9.3 - Boolean Logic (Mixed Reports):
Input: (Report Type = STR OR Report Type = Escalated CTR) AND Amount >$10,000
Expected: Returns all STRs and escalated CTRs with amounts exceeding $10,000; excludes non-escalated CTRs
Test Case 9.4 - Saved Query:
Input: Analyst saves search "PEP subjects in escalated CTRs, last 90 days"
Action: Clicks saved query 2 weeks later
Expected: Search executes with date range auto-updated to most recent 90 days, returns escalated CTRs with PEP subjects
Test Case 9.5 - Export Results (Mixed Report Types):
Input: Search returns 47 reports (30 STRs, 12 escalated CTRs, 5 CTRs - compliance officer search), analyst clicks "Export to Excel"
Expected: Excel file downloads with all 47 records including report type column, key fields in readable format
Test Case 9.6 - Access Control (Analyst Search):
Input: Analyst searches for all reports involving "Diamond Mining Ltd"
Expected: Results show 3 STRs and 2 escalated CTRs assigned to analyst's team; 4 non-escalated CTRs are excluded with message "4 additional CTRs found (Compliance access only)"
Test Case 9.7 - Access Control (Compliance Officer Search):
Input: Compliance officer searches for all reports involving "Diamond Mining Ltd"
Expected: Results show 3 STRs, 2 escalated CTRs, and 4 non-escalated CTRs (all 9 reports visible to compliance)
Test Case 9.8 - Workflow Path Filter:
Input: Search filtered by "Workflow = CTR Compliance Path"
Expected: Results show only CTRs currently in Compliance Review, Archive, or Monitor status; excludes escalated CTRs (now in Analysis path)
Test Case 9.9 - Escalation Status in Results:
Input: Search returns 10 CTRs involving high-risk jurisdiction
Expected: Results clearly show: "CTR - Archived" (3), "CTR - Under Monitoring" (2), "CTR - Escalated to Analysis" (5), with escalation dates for the 5 escalated reports
Edge Cases:
Search with zero results
Search criteria producing 1,000+ results (pagination test)
Very long search query string (50+ characters in each field)
Search while database is being updated
Analyst attempts to export search results including non-escalated CTRs (system should exclude unauthorized records from export)
Saved query becomes invalid due to user role change (e.g., analyst demoted to data clerk - query should fail gracefully)

Feature 10: Structured Tactical & Strategic Analysis
User Story
As an analyst,
 I want a guided framework for conducting tactical and strategic analysis on STRs and escalated CTRs,
 so that my investigative reasoning is structured, consistent, and defensible.
Functional Requirements
FR-10.1: The system shall provide a tactical analysis template with predefined sections: Executive Summary, Subject Background, Transaction Patterns, Risk Assessment, Evidence Links, Conclusions.
FR-10.2: The system shall provide a strategic analysis template for broader trends: Typology Description, Prevalence, Geographic Concentration, Time Trends, Regulatory Gaps, Recommendations.
FR-10.3: The system shall allow analysts to create analysis entries linked to one or more reports (STRs, escalated CTRs, or both).
FR-10.4: The system shall allow analysts to attach supporting documents, charts, and evidence to analysis entries.
FR-10.5: The system shall automatically populate subject information from linked reports (both STRs and escalated CTRs) into analysis templates.
FR-10.6: The system shall allow supervisors to review, comment on, and approve analysis before case proposal submission.
FR-10.7: The system shall save analysis drafts automatically every 2 minutes to prevent data loss.
FR-10.8: The system shall display analysis completion percentage based on required sections filled.
FR-10.9: The system shall allow analysts to tag analysis entries with typologies (e.g., Trade-Based Money Laundering, Structuring, Cash Smuggling).
FR-10.10: The system shall generate a timeline of all analysis activities for audit purposes.
FR-10.11: The system shall display escalation context for any escalated CTRs included in analysis, showing compliance team's original flagging reasons.
FR-10.12: The system shall allow analysts to cite both direct STR evidence and escalated CTR evidence within a single tactical analysis.
FR-10.13: The system shall track whether tactical analysis is based on: (a) STRs only, (b) escalated CTRs only, or (c) mixed STR and escalated CTR evidence.
Acceptance Criteria
AC-10.1: Given an analyst creates a tactical analysis, when they select a linked STR and 2 linked escalated CTRs, then the system auto-fills subject name, ID, and transaction summary from all 3 reports into the template.
AC-10.2: Given an analysis is 60% complete (4 of 6 sections filled), when the analyst views the entry, then the system displays "60% Complete" with visual progress bar.
AC-10.3: Given a supervisor reviews analysis based on escalated CTRs, when they view the Evidence Links section, then they can see the original compliance team escalation justifications alongside analyst's additional findings.
AC-10.4: Given an analyst creates strategic analysis on "Structuring patterns in CTRs," when linking 15 escalated CTRs, then the template shows escalation rate statistic (15 escalated out of X total CTRs reviewed in period).
AC-10.5: Given a tactical analysis includes 2 STRs and 3 escalated CTRs, when viewing the analysis summary, then the system displays "Evidence Base: 2 STRs, 3 Escalated CTRs."
Tests (Conceptual)
Test Case 10.1 - Tactical Analysis Creation (Mixed Evidence):
Input: Analyst selects 2 STRs and 1 escalated CTR involving same subject network, clicks "Create Tactical Analysis"
Expected: Template opens with auto-populated subject data from all 3 reports, clearly labeled by report type, escalation context visible for the CTR
Test Case 10.2 - Auto-Save:
Input: Analyst writes in "Transaction Patterns" section for 5 minutes
Expected: System saves draft at 2-minute intervals, displays "Last saved at [TIME]"
Test Case 10.3 - Completion Tracking:
Input: Analyst fills Executive Summary, Subject Background, Conclusions (3 of 6 sections)
Expected: Progress bar shows 50%, remaining sections highlighted
Test Case 10.4 - Supervisor Review (Escalated CTR Context):
Input: Supervisor opens analysis based on 3 escalated CTRs, adds comment "Need more details on source of funds beyond what compliance team flagged," marks as "Returned"
Expected: Analyst receives notification, analysis status = "In Revision," comment visible with reference to compliance team's original escalation reasons
Test Case 10.5 - Strategic Analysis (CTR Escalation Trends):
Input: Analyst creates strategic analysis on "Structuring in Mobile Money sector," links 15 escalated CTRs out of 120 total CTRs reviewed over 6 months
Expected: Template sections populate:
Typology: "Structuring - Mobile Money"
Prevalence: "15/120 CTRs escalated (12.5% escalation rate) vs. 8% baseline"
Geographic: Heat map of branches with highest escalation rates
Trend: Quarterly chart showing increasing escalation rate
Recommendations: "Enhanced monitoring of mobile money accounts near $10,000 threshold"
Test Case 10.6 - Evidence Base Clarity:
Input: Analyst creates tactical analysis linking 1 STR, 3 escalated CTRs, 2 documents
Expected: Analysis header displays:
"Evidence Base: 1 STR, 3 Escalated CTRs, 2 Supporting Documents"
Each linked report clearly labeled with report type and escalation status
Test Case 10.7 - Escalation Justification Integration:
Input: Analyst includes escalated CTR in analysis where compliance officer flagged "Subject in 3 CTRs within 60 days"
Expected: Analysis Evidence Links section shows:
Original CTR Data: Transaction details (read-only)
Compliance Escalation Justification: "Flagged by Officer Jane Doe: Subject in 3 CTRs within 60 days, approved by Supervisor John Smith"
Analyst's Additional Findings: [Analyst adds investigation results here]
Edge Cases:
Internet disconnection during analysis writing (offline draft recovery)
Analysis linked to 50+ reports (20 STRs, 30 escalated CTRs) - performance test
Simultaneous editing by analyst and supervisor
Analysis template customization by FIA leadership
Escalated CTR included in analysis, but analyst cannot access original compliance review notes (should have full context - may indicate permission issue)

Feature 11: Document Management & Full-Text Search
User Story
As an analyst,
 I want to upload, organize, and search supporting documents related to cases (both STR and escalated CTR investigations),
 so that evidence is centralized and quickly retrievable during investigations.
Functional Requirements
(No changes needed to this feature - document management works identically for STR cases and escalated CTR cases. Original requirements remain valid.)
FR-11.1: The system shall allow analysts to upload documents in multiple formats: PDF, Word (.doc/.docx), Excel (.xls/.xlsx), images (JPEG, PNG).
FR-11.2: The system shall automatically extract text from PDF and Word documents for full-text searching.
FR-11.3: The system shall allow analysts to tag documents with categories: KYC Documents, Bank Statements, Correspondence, Court Orders, Intelligence Reports, CTR Escalation Documentation, Other.
FR-11.4: The system shall link documents to specific reports (STRs, CTRs, escalated CTRs), subjects, or cases.
FR-11.5: The system shall provide full-text search across all uploaded document content within 10 seconds.
FR-11.6: The system shall display document metadata: filename, upload date, uploaded by, file size, tags, linked entities, report type (if applicable).
FR-11.7: The system shall allow analysts to preview documents without downloading.
FR-11.8: The system shall maintain version history when a document is updated or replaced.
FR-11.9: The system shall enforce file size limits (maximum 25MB per document).
FR-11.10: The system shall log all document access (who viewed, downloaded, or modified each document).
FR-11.11: The system shall allow bulk upload of multiple documents simultaneously (up to 20 files at once).
FR-11.12: The system shall prevent deletion of documents linked to approved cases without supervisor authorization.
FR-11.13: The system shall allow tagging of documents as "CTR Escalation Documentation" when uploading supporting materials for escalated CTR investigations.
(Remainder of requirements from original FR-11.1 through FR-11.12 remain unchanged)
Acceptance Criteria
AC-11.1: Given a supervisor approves a case proposal, when the case is created, then the system generates a unique reference (e.g., FIA-2026-0001) and links all proposal evidence automatically.
AC-11.2: Given a case is 35 days old, when viewing the case dashboard, then the case appears with a "Overdue" flag and highlighted in amber.
AC-11.3: Given an officer attempts to delete a case, then the system prevents deletion and prompts for closure with reason instead.
AC-11.4: Given an analyst uploads compliance officer's escalation justification as PDF, when ta

Feature 11: Intelligence Case File Management
User Story
As an intelligence officer,
 I want to organize all evidence, analysis, and reports into formal case files,
 so that investigations are structured and ready for dissemination to law enforcement.
Functional Requirements
FR-11.1: The system shall create a case file only after supervisor approval of a case proposal.
FR-11.2: The system shall automatically link all related reports, subjects, documents, and analysis to the approved case.
FR-11.3: The system shall assign a unique case reference number in format: FIA-YYYY-####.
FR-11.4: The system shall allow case officers to organize case contents into sections: Evidence, Analysis, Documents, Timeline, Dissemination Log.
FR-11.5: The system shall track case status: Open, Under Investigation, Pending Dissemination, Disseminated, Closed.
FR-11.6: The system shall allow officers to add investigative notes and updates with timestamps.
FR-11.7: The system shall generate an automatic case timeline showing all linked transactions chronologically.
FR-11.8: The system shall require a closure reason when cases are closed (Disseminated to Law Enforcement, Insufficient Evidence, Duplicate, Other).
FR-11.9: The system shall prevent case deletion; only closure with documented reason is permitted.
FR-11.10: The system shall allow supervisors to reassign cases between officers with justification.
FR-11.11: The system shall display case age (days since opening) and flag cases open >30 days.
FR-11.12: The system shall maintain complete audit trail of all case activities.
Acceptance Criteria
AC-11.1: Given a supervisor approves a case proposal, when the case is created, then the system generates a unique reference (e.g., FIA-2026-0001) and links all proposal evidence automatically.
AC-11.2: Given a case is 35 days old, when viewing the case dashboard, then the case appears with a "Overdue" flag and highlighted in amber.
AC-11.3: Given an officer attempts to delete a case, then the system prevents deletion and prompts for closure with reason instead.
Tests (Conceptual)
Test Case 11.1 - Case Creation:
Input: Supervisor approves case proposal for "Money Laundering - Diamond Trading Network"
Expected: Case created with reference FIA-2026-0045, status = "Open," 12 linked STRs, 5 subjects, 23 documents auto-attached
Test Case 11.2 - Timeline Generation:
Input: Case with 30 transactions across 8 reports over 14 months
Expected: Visual timeline displays all 30 transactions chronologically with subject names and amounts
Test Case 11.3 - Investigative Notes:
Input: Officer adds note "Requested additional KYC from Bank of Monrovia on 2026-01-15"
Expected: Note saved with timestamp, officer name, appears in case activity log
Test Case 11.4 - Case Closure:
Input: Officer clicks "Close Case," selects reason "Disseminated to Law Enforcement," adds reference "LE-2026-789"
Expected: Case status = "Closed," closure reason logged, case searchable but not editable
Test Case 11.5 - Case Reassignment:
Input: Supervisor reassigns case from Officer A (on leave) to Officer B, reason "Medical leave coverage"
Expected: Case removed from A's dashboard, appears in B's queue, reassignment logged with reason
Test Case 11.6 - Overdue Flagging:
Input: System runs daily check, identifies case opened 32 days ago with status "Open"
Expected: Case flagged as overdue, appears in supervisor alert dashboard
Edge Cases:
Case with 100+ linked reports (performance test)
Attempt to close case without selecting reason
Case reassignment while officer is actively editing
Reopening of closed case (should require special authorization)

Feature 12: Intelligence Report Writer
User Story
As an intelligence officer,
 I want to generate professional intelligence reports from case files using templates,
 so that dissemination to law enforcement is efficient and standardized.
Functional Requirements
FR-12.1: The system shall provide predefined intelligence report templates: Tactical Intelligence Report, Strategic Assessment, Subject Profile, Typology Analysis.
FR-12.2: The system shall auto-populate report templates with case data: case reference, subjects, transaction summaries, timeline, linked reports.
FR-12.3: The system shall allow officers to edit and customize template sections while maintaining required structure.
FR-12.4: The system shall include a rich text editor supporting headings, bullet points, tables, and basic formatting.
FR-12.5: The system shall allow officers to embed charts, diagrams, and images within reports.
FR-12.6: The system shall generate reports in PDF format for distribution.
FR-12.7: The system shall require supervisor review and approval before reports can be marked as "Final."
FR-12.8: The system shall maintain draft versions and final versions separately with version numbering.
FR-12.9: The system shall include standard headers and footers: FIA logo, classification marking (Confidential/Restricted), date, case reference.
FR-12.10: The system shall allow officers to save report templates for reuse on future cases.
FR-12.11: The system shall log all report generations including who created, when, and for which case.
Acceptance Criteria
AC-12.1: Given a case with 5 subjects and 20 transactions, when officer selects "Generate Tactical Intelligence Report," then the template auto-fills subject names, transaction timeline, and case reference within 10 seconds.
AC-12.2: Given a draft report, when supervisor marks it "Approved," then the report version changes to "Final v1.0" and becomes read-only.
AC-12.3: Given a final report, when generated as PDF, then the document includes FIA logo, "CONFIDENTIAL" marking, and case reference on every page.
Tests (Conceptual)
Test Case 12.1 - Report Generation:
Input: Officer selects Tactical Intelligence Report template for Case FIA-2026-0032
Expected: Template opens with case reference, 3 subject names, 12-month transaction timeline, 8 linked STRs pre-populated
Test Case 12.2 - Rich Text Editing:
Input: Officer adds Executive Summary with bold headings, bullet points, and embedded transaction flow chart
Expected: Formatting preserved in preview and PDF export
Test Case 12.3 - Version Control:
Input: Officer saves draft report, edits twice, supervisor approves
Expected: Draft versions 0.1, 0.2, 0.3 archived, final report becomes v1.0
Test Case 12.4 - PDF Generation:
Input: Click "Export to PDF" on final report
Expected: PDF downloads with FIA branding, confidentiality markings, page numbers, all formatting intact
Test Case 12.5 - Template Customization:
Input: Officer creates custom template "Cross-Border Wire Transfer Analysis" with specialized sections
Expected: Template saved, appears in template library for future use
Test Case 12.6 - Supervisor Approval Workflow:
Input: Officer submits report for approval, supervisor reviews and requests changes
Expected: Report returns to draft mode with supervisor comments, officer edits, resubmits
Edge Cases:
Report with 50+ pages (pagination and performance)
Embedded image files >5MB
PDF generation failure (disk space, permissions)
Report approval while officer is simultaneously editing

PHASE 3 FEATURES (Months 15+)

Feature 13: Statistical Reporting & FATF Compliance Dashboards
User Story
As FIA leadership,
 I want automated dashboards showing submission volumes, processing times, and compliance metrics,
 so that I can demonstrate FATF compliance and monitor operational performance.
Functional Requirements
FR-13.1: The system shall provide a compliance dashboard displaying: total reports received (by type and period), reports by workflow stage, average processing time per stage, case opening rate.
FR-13.2: The system shall generate monthly statistical reports showing: STR/CTR volumes by reporting entity type, geographic distribution, transaction value ranges, top reporting entities.
FR-13.3: The system shall track and display analyst productivity metrics: reports reviewed per analyst, cases opened per analyst, average time in each workflow stage.
FR-13.4: The system shall provide visualizations: bar charts, line graphs, pie charts, heat maps for geographic distribution.
FR-13.5: The system shall allow filtering of statistics by date range, report type, entity type, workflow stage.
FR-13.6: The system shall export statistical reports to PDF and Excel formats.
FR-13.7: The system shall calculate and display key performance indicators (KPIs): percentage of reports escalated to analysis, case opening rate from analyzed reports, average days from submission to dissemination.
FR-13.8: The system shall generate annual typology reports showing prevalence of different ML/TF patterns.
FR-13.9: The system shall provide comparative statistics: current period vs. previous period, year-over-year trends.
FR-13.10: The system shall allow supervisors to schedule automated monthly report generation and email delivery.
FR-13.11: The system shall display separate workload dashboards for:
Compliance side: CTRs assigned to data clerks and compliance officers
Analysis side: STRs and escalated CTRs assigned to analysts
FR-13.12: The system shall allow Director of Operations to view combined workload across both compliance and analysis departments.
FR-13.13: The system shall display escalation metrics on dashboards:
Compliance dashboard: CTR escalation rate (escalated CTRs / total CTRs processed)
Analysis dashboard: Escalated CTRs received vs. direct STR submissions
Acceptance Criteria
AC-13.1: Given 250 reports received in Q1 2026, when viewing the compliance dashboard, then the system displays breakdown by type (150 STRs, 100 CTRs) with percentage distribution.
AC-13.2: Given average processing time is 22 days, when comparing to previous quarter (45 days), then the system displays "51% improvement" with trend arrow.
AC-13.3: Given monthly statistics requested for December 2025, when exported to PDF, then the report includes all volume metrics, charts, and analyst productivity data.
AC-13.4: Given a Compliance Officer Supervisor views the compliance dashboard, when filtering by team, then the system shows only CTRs assigned to their compliance officers and data clerks.
AC-13.5: Given Director of Operations views the executive dashboard, when accessing combined metrics, then the system displays both compliance (CTR processing) and analysis (STR/escalated CTR investigation) performance.
Tests (Conceptual)
Test Case 13.1 - Compliance Dashboard:
Input: View dashboard for January 2026
Expected: Displays 45 reports received, 30 validated, 25 under compliance review, 15 in analysis, 8 approved cases, 5 disseminated
Test Case 13.2 - Entity Performance:
Input: Generate report "Top Reporting Entities - Last 12 Months"
Expected: Table showing top 10 banks/MFIs ranked by submission volume with percentages
Test Case 13.3 - Processing Time Trends:
Input: View line graph "Average Processing Time by Month"
Expected: 12-month trend line showing reduction from 45 days (Jan 2025) to 18 days (Dec 2025)
Test Case 13.4 - Typology Analysis:
Input: Generate annual typology report for 2025
Expected: Report shows: Structuring (35%), Trade-Based ML (25%), Cash Smuggling (20%), Other (20%) with case examples
Test Case 13.5 - Automated Scheduling:
Input: Supervisor schedules monthly report "Submission Statistics" to auto-generate on 5th of each month, email to leadership
Expected: System generates report automatically, emails on schedule with PDF attachment
Test Case 13.6 - Escalation Metrics:
Input: Compliance Officer Supervisor views compliance dashboard for Q1 2026
Expected: Dashboard shows CTR escalation rate of 8% (12 CTRs escalated out of 150 processed)
Test Case 13.7 - Department-Specific Dashboards:
Input: Head of Analysis views analysis dashboard
Expected: Shows 25 direct STRs received, 12 escalated CTRs received from compliance, analyst workload distribution
Edge Cases:
Dashboard performance with 10,000+ historical reports
Export very large datasets (>5,000 records to Excel)
Statistics for periods with zero reports
Timezone handling for international reporting comparisons

Feature 14: External Data Integration
User Story
As an analyst,
 I want to check subjects against sanctions lists, PEP databases, and adverse media,
 so that I can identify high-risk individuals and entities efficiently.
Functional Requirements
FR-14.1: The system shall integrate with publicly available sanctions lists: UN Consolidated List, OFAC SDN List, EU Sanctions List.
FR-14.2: The system shall integrate with Politically Exposed Persons (PEP) databases when available.
FR-14.3: The system shall allow manual upload of external datasets in CSV or Excel format.
FR-14.4: The system shall automatically check all subjects in new reports against integrated external databases.
FR-14.5: The system shall generate automatic alerts when a subject matches a sanctions list or PEP database entry.
FR-14.6: The system shall display match confidence levels: Exact Match, High Confidence, Possible Match, No Match.
FR-14.7: The system shall allow analysts to manually trigger checks against external databases for existing subjects.
FR-14.8: The system shall update external datasets automatically on a configurable schedule (daily/weekly/monthly).
FR-14.9: The system shall log all external data checks including timestamp, database source, and match results.
FR-14.10: The system shall allow administrators to add custom watch lists (e.g., Liberia-specific high-risk entities).
Acceptance Criteria
AC-14.1: Given a new STR with subject "John Smith DOB 1975-03-12," when validated, then the system checks all integrated databases and returns "Possible Match - OFAC SDN List (85% confidence)."
AC-14.2: Given a sanctions list is updated with 50 new entries, when the system refreshes, then all existing subjects are rechecked and new matches generate alerts within 1 hour.
AC-14.3: Given an analyst uploads a custom watch list of 200 local high-risk businesses, when a new report mentions any listed entity, then the system generates a Medium Risk alert.
Tests (Conceptual)
Test Case 14.1 - Automatic Sanctions Check:
Input: New CTR submitted with beneficiary "ABC Trading Company"
System action: Checks UN, OFAC, EU lists automatically
Expected: Alert generated "Exact Match - UN Consolidated List, Entity #UN12345"
Test Case 14.2 - PEP Detection:
Input: STR with subject "Sarah Johnson, Minister of Finance"
System action: Checks PEP database
Expected: "High Confidence Match - PEP Status Confirmed, Position: Government Official"
Test Case 14.3 - Manual Recheck:
Input: Analyst selects existing subject "Diamond Mining Corp," clicks "Check External Databases"
Expected: System runs check, displays results in 5 seconds, logs action
Test Case 14.4 - Database Update:
Input: System scheduled to update OFAC list weekly, update runs Sunday 2AM
Expected: Latest OFAC data downloaded, all subjects rechecked, 3 new matches found, alerts generated
Test Case 14.5 - Custom Watch List:
Input: Upload CSV "Liberia_High_Risk_Entities.csv" with 150 companies
Expected: Watch list activated, future reports checked against it, category "Custom - Liberia High Risk" applied
Test Case 14.6 - Match Confidence:
Input: Subject "John A. Smith" checked against database entry "John Andrew Smith"
Expected: Result "Possible Match (75% confidence) - Name similarity, requires manual review"
Edge Cases:
Subject name with special characters or non-Latin script
Database integration failure (API unavailable)
Matching against very large datasets (1M+ entries)
False positive handling (common names like "Mohamed Ali")

Feature 15: Network Visualization & Charting
User Story
As an analyst,
 I want to visualize relationships between subjects, accounts, and transactions,
 so that I can identify networks, patterns, and hidden connections.
Functional Requirements
FR-15.1: The system shall generate network diagrams showing relationships between subjects mentioned in reports.
FR-15.2: The system shall display different node types: Persons, Companies, Accounts, with distinct visual markers.
FR-15.3: The system shall show relationship types as labeled connections: Beneficiary, Account Holder, Director, Signatory, Business Partner.
FR-15.4: The system shall allow analysts to manually add or remove nodes and connections.
FR-15.5: The system shall support transaction flow diagrams showing money movement between accounts over time.
FR-15.6: The system shall generate timeline charts showing transaction patterns for subjects across multiple reports.
FR-15.7: The system shall allow export of diagrams as images (PNG, JPEG) or PDF for inclusion in intelligence reports.
FR-15.8: The system shall support filtering of network views by date range, transaction value, relationship type.
FR-15.9: The system shall highlight high-risk nodes based on integrated external data (sanctions, PEP status).
FR-15.10: The system shall allow analysts to save diagram layouts for future reference.
FR-15.11: The system shall display transaction values on connection lines in flow diagrams.
Acceptance Criteria
AC-15.1: Given a case with 5 subjects and 15 inter-related transactions, when analyst clicks "Generate Network Diagram," then the system displays all subjects as nodes with transaction connections within 10 seconds.
AC-15.2: Given a subject flagged as PEP, when included in network diagram, then the node appears in red with "PEP" label clearly visible.
AC-15.3: Given a completed network diagram, when exported as PNG, then the image maintains all labels, colors, and layout at readable resolution.
Tests (Conceptual)
Test Case 15.1 - Basic Network Generation:
Input: Case with 3 persons, 2 companies, 4 accounts, 12 transactions
Expected: Diagram shows 9 nodes (3 persons, 2 companies, 4 accounts) with 12 transaction connections labeled with amounts
Test Case 15.2 - Transaction Flow:
Input: Select subject "John Doe," generate transaction flow for 6-month period
Expected: Flow diagram shows money movement: Bank A → John's Account → Company B → Account X, with dates and amounts
Test Case 15.3 - Timeline Visualization:
Input: Generate timeline for "ABC Trading Company" across 18 months
Expected: Timeline shows 25 transactions as events, color-coded by type (incoming/outgoing), hoverable for details
Test Case 15.4 - Manual Editing:
Input: Analyst adds connection "John Doe → Director → XYZ Corp" to existing diagram
Expected: New connection appears, relationship type labeled, change logged
Test Case 15.5 - High-Risk Highlighting:
Input: Network includes subject on OFAC list and 2 PEPs
Expected: OFAC subject node red with "Sanctioned" badge, PEP nodes amber with "PEP" badge
Test Case 15.6 - Filtering:
Input: Network with 50 transactions, filter to show only transactions >$10,000
Expected: Diagram updates to show only qualifying connections, counts updated
Edge Cases:
Network with 100+ nodes (layout and performance)
Circular transaction patterns (A→B→C→A)
Export of very complex diagrams (file size limits)
Diagram generation with incomplete relationship data
Feature ESC: CTR Escalation Workflow
User Story
As a Compliance Officer Supervisor or Head of Compliance,
 I want to escalate suspicious CTRs to STR status and hand them off to the Analysis Department,
 so that high-risk transactions flagged during compliance review receive proper investigation.
Functional Requirements
FR-ESC-1: The system shall allow compliance officers to flag CTRs for potential escalation with documented justification.
FR-ESC-2: The system shall require Compliance Officer Supervisors to review escalation recommendations and approve or reject with documented reasoning.
FR-ESC-3: The system shall allow Head of Compliance to make final escalation decisions for CTRs, converting their status from CTR to "Escalated CTR" or "STR."
FR-ESC-4: The system shall automatically notify the Head of Analysis when a CTR is escalated, creating an assignment-ready item in the analysis workflow.
FR-ESC-5: The system shall maintain full audit trail showing:
Who flagged the CTR for escalation (compliance officer)
Who approved the escalation (supervisor or Head of Compliance)
When the escalation occurred
Documented justification for escalation
FR-ESC-6: The system shall allow Director of Operations to authorize escalations when there is disagreement between Head of Compliance and Head of Analysis on borderline cases.
FR-ESC-7: The system shall display escalation metrics on dashboards:
Compliance dashboard: CTR escalation rate (escalated CTRs / total CTRs processed)
Analysis dashboard: Escalated CTRs received vs. direct STR submissions
FR-ESC-8: The system shall preserve the original CTR data when escalated, while allowing analysts to add additional investigation findings.
FR-ESC-9: The system shall distinguish between compliance-level alerts for CTR red-flag detection (e.g., structuring patterns, threshold proximity) and analysis-level alerts for STR and escalated CTR risk assessment (e.g., PEP involvement, high-risk jurisdictions).
FR-ESC-10: The system shall allow Compliance Officer Supervisors to configure compliance-level alert rules for CTR processing.
FR-ESC-11: The system shall allow Head of Analysis to configure analysis-level alert rules for STR investigation.
Acceptance Criteria
AC-ESC-1: Given a compliance officer flags a CTR with reason "Multiple structured deposits just below $10,000 threshold," when the Compliance Officer Supervisor reviews and approves, then the CTR status changes to "Escalated" and Head of Analysis receives notification.
AC-ESC-2: Given a Compliance Officer Supervisor rejects an escalation recommendation, when the decision is saved, then the compliance officer receives notification with the rejection reason and the CTR remains in compliance workflow.
AC-ESC-3: Given an escalated CTR is assigned to an analyst, when the analyst views the report, then they can see both the original CTR data and the compliance team's escalation justification.
AC-ESC-4: Given a CTR is escalated to STR status by Head of Compliance, when the escalation is finalized, then the system removes the report from compliance workload counts and adds it to analysis assignment queue.
AC-ESC-5: Given the compliance dashboard is viewed for Q1 2026, when escalation metrics are displayed, then the dashboard shows CTR escalation rate of 8% (12 CTRs escalated out of 150 processed).
Tests (Conceptual)
Test Case ESC-1 - Successful Escalation:
Input: Compliance officer flags CTR for escalation with detailed justification
Action: Compliance Officer Supervisor reviews and approves
Expected: CTR status = "Escalated," appears in Head of Analysis assignment queue, all audit trail entries logged
Test Case ESC-2 - Escalation with Additional Context:
Input: Head of Compliance escalates CTR and adds note "Subject has 3 previous CTRs in 90 days"
Expected: Escalated CTR includes original data + escalation context visible to assigned analyst
Test Case ESC-3 - Director Override:
Input: Head of Compliance recommends escalation, Head of Analysis questions necessity, Director of Operations reviews
Expected: Director can make final escalation decision with documented justification visible to both departments
Test Case ESC-4 - Escalation Rejection:
Input: Compliance officer flags CTR for escalation, Compliance Officer Supervisor reviews and rejects with reason "Insufficient evidence of structuring"
Expected: CTR remains in compliance workflow, compliance officer notified with rejection reason, decision logged
Test Case ESC-5 - Workload Impact:
Input: CTR escalated from compliance to analysis
Expected: Compliance workload count decreases by 1, analysis assignment queue increases by 1, both dashboards update in real-time
Edge Cases:
Compliance officer attempts to escalate CTR without documented reason
CTR escalated while another compliance officer is simultaneously reviewing it
Analyst assigned escalated CTR cannot access original CTR compliance review notes
Multiple escalation attempts for same CTR by different officers

🛡️ Non-Functional Requirements
10.1 Performance
NFR-P1: The system shall support up to 100 concurrent users without performance degradation.
NFR-P2: The system shall load dashboards and report lists within 3 seconds under normal load.
NFR-P3: The system shall process report validation (automated and manual combined) within 5 minutes for 95% of submissions.
NFR-P4: The system shall support database growth to 50,000 reports without requiring architecture changes.
NFR-P5: The system shall complete search queries within 5 seconds for databases containing up to 10,000 reports.
NFR-P6: The system shall generate PDF intelligence reports within 30 seconds for reports up to 50 pages.
10.2 Security
NFR-S1: The system shall encrypt all data at rest using industry-standard encryption (AES-256 or equivalent).
NFR-S2: The system shall encrypt all data in transit using TLS 1.2 or higher.
NFR-S3: The system shall enforce strong password requirements: minimum 12 characters, mix of uppercase, lowercase, numbers, special characters.
NFR-S4: The system shall lock user accounts after 5 consecutive failed login attempts.
NFR-S5: The system shall log all user actions including login/logout, data access, modifications, and deletions.
NFR-S6: The system shall enforce role-based access control preventing users from accessing data outside their permissions.
NFR-S7: The system shall require re-authentication for sensitive actions: case approval, report dissemination, user management.
NFR-S8: The system shall comply with Liberian data protection regulations and FATF Recommendation 29 confidentiality requirements.
NFR-S9: The system shall maintain audit logs for minimum 7 years, immutable and tamper-evident.
NFR-S10: The system shall support secure API authentication using API keys or OAuth 2.0 for reporting entity integrations.
10.3 Availability & Reliability
NFR-A1: The system shall achieve 99% uptime during business hours (8 AM - 6 PM local time, Monday-Friday).
NFR-A2: The system shall perform automated daily backups of all data.
NFR-A3: The system shall support disaster recovery with maximum data loss of 24 hours (Recovery Point Objective: 24 hours).
NFR-A4: The system shall restore from backup within 4 hours in case of system failure (Recovery Time Objective: 4 hours).
NFR-A5: The system shall handle graceful degradation: if external integrations fail, core submission and validation functions continue operating.
10.4 Usability
NFR-U1: The system shall be accessible via modern web browsers: Chrome, Firefox, Safari, Edge (latest 2 versions).
NFR-U2: The system interface shall be usable on screens with minimum resolution 1366x768.
NFR-U3: The system shall provide context-sensitive help and tooltips for all major functions.
NFR-U4: The system shall display error messages in clear, non-technical language with suggested actions.
NFR-U5: The system shall support English language interface (Phase 1).
NFR-U6: New users shall be able to complete basic tasks (report validation, assignment) within 30 minutes of training.
NFR-U7: The system shall be operable by users with basic computer literacy (file upload, form filling, web navigation).
10.5 Compliance & Auditability
NFR-C1: The system shall comply with FATF Recommendation 29 (Financial Intelligence Units).
NFR-C2: The system shall maintain immutable audit logs for all report submissions, validations, approvals, and disseminations.
NFR-C3: The system shall generate compliance reports required by Central Bank of Liberia on demand.
NFR-C4: The system shall support internal and external audits with complete activity trail reconstruction.
NFR-C5: The system shall timestamp all activities using server time synchronized with national time standard.
NFR-C6: The system shall retain all reports, cases, and associated data for minimum 10 years per Liberian AML/CFT regulations.
10.6 Scalability
NFR-SC1: The system architecture shall support scaling from 46 to 379 reporting entities without major redesign.
NFR-SC2: The system shall support growth from current analyst team (10-12) to 30 analysts without performance issues.
NFR-SC3: The system shall handle 10x increase in report volume (current baseline to be established during requirements gathering).

📊 Success Metrics (KPIs)
11.1 Operational Efficiency Metrics
KPI-1: Report Processing Time Reduction
Baseline: 45 days average from submission to dissemination (current state)
Target: 18 days average (60% reduction)
Measurement: System automatically tracks timestamp from report submission to dissemination completion
Frequency: Monthly rolling average
KPI-2: Analyst Manual Workload Reduction
Baseline: 100% manual Excel processing of all reports
Target: 60% reduction in manual processing hours per report
Measurement: Compare average time spent per report (pre-system vs. post-system) through task completion logs
Frequency: Quarterly comparison
KPI-3: Validation Efficiency
Baseline: To be established during first month of operation
Target: 80% of reports pass automated validation on first submission
Measurement: (Reports passing automated validation / Total reports submitted) × 100
Frequency: Weekly tracking
KPI-4: Task Assignment Balance
Target: No analyst assigned more than 20% above team average workload
Measurement: Standard deviation of workload distribution across analysts
Frequency: Daily dashboard monitoring

KPI-ESC-1: CTR Escalation Rate
Target: 5-10% of CTRs escalated to Analysis (indicates effective compliance filtering)
Measurement: (CTRs escalated / Total CTRs processed) × 100
Frequency: Monthly
KPI-ESC-2: Escalation Decision Quality
Target: 70%+ of escalated CTRs result in case opening or intelligence dissemination (validates escalation decisions)
Measurement: (Escalated CTRs leading to cases / Total escalated CTRs) × 100
Frequency: Quarterly
KPI-ESC-3: Compliance Processing Time
Target: 80% of CTRs complete Compliance Review within 5 days
Measurement: Days from Data Clerk Validation to Compliance Decision
Frequency: Weekly tracking
KPI-ESC-4: Analysis Department Capacity Utilization
Target: Analysts spend 70%+ of time on STRs and escalated CTRs (not administrative tasks)
Measurement: Time tracking via task completion logs
Frequency: Monthly

11.2 System Adoption Metrics
KPI-5: Digital Submission Adoption Rate
Baseline: 0% (all email-based)
Target: 100% digital submission within 12 months
Milestones:
Month 3: 30% of active reporting entities
Month 6: 60% of active reporting entities
Month 12: 100% of active reporting entities
Measurement: (Entities submitting digitally / Total active reporting entities) × 100
Frequency: Monthly
KPI-6: Reporting Entity Onboarding
Baseline: 46 entities currently reporting
Target: 100+ entities onboarded within 18 months
Measurement: Cumulative count of registered reporting entities with at least one successful digital submission
Frequency: Monthly
KPI-7: Multi-Format Submission Usage
Target: Minimum 80% of entities using API (not just Excel) by Month 18
Measurement: Distribution of submission formats across all reports received
Frequency: Quarterly analysis

11.3 Intelligence Production Metrics
KPI-8: Subject Profiling Coverage
Target: 100% of subjects in new reports automatically linked to historical profile within 1 minute of validation
Measurement: (Subjects auto-linked / Total unique subjects in new reports) × 100
Frequency: Daily automatic tracking
KPI-9: Alert Generation Effectiveness
Baseline: 0% (no automated alerting exists)
Target Phase 1: Generate alerts on 15-25% of validated reports
Target Phase 2: Achieve 70%+ "True Positive" rate on generated alerts (analyst confirmation)
Measurement:
Alert generation rate: (Reports triggering alerts / Total validated reports) × 100
True positive rate: (Alerts marked "True Positive" / Total alerts reviewed) × 100
Frequency: Monthly review
KPI-10: Case Opening Rate
Baseline: To be established from historical data review
Target: Open formal cases on 10-15% of analyzed reports
Measurement: (Cases opened / Reports reaching Analyze stage) × 100
Frequency: Monthly
KPI-11: Intelligence Dissemination Volume
Baseline: To be established from FIA historical records
Target: Increase intelligence reports disseminated by 40% year-over-year
Measurement: Count of completed intelligence reports disseminated to law enforcement
Frequency: Quarterly comparison
KPI-12: Case Completion Time
Target: 80% of cases completed (closed or disseminated) within 30 days of opening
Measurement: Days from case opening to closure, tracked per case
Frequency: Monthly review of case age distribution

11.4 Data Quality Metrics
KPI-13: Report Rejection Rate
Target: <10% of submissions auto-rejected due to validation failures after Month 6
Measurement: (Auto-rejected reports / Total submissions) × 100
Trend: Should decrease over time as reporting entities improve submission quality
Frequency: Weekly tracking
KPI-14: Report Return Rate
Target: <5% of validated reports returned to reporting entity for correction after Month 6
Measurement: (Reports returned for correction / Reports passing automated validation) × 100
Frequency: Monthly
KPI-15: Subject Profile Accuracy
Target: <3% duplicate subject profiles requiring manual merge
Measurement: (Duplicate profiles merged / Total subject profiles created) × 100
Frequency: Monthly audit

11.5 System Performance Metrics
KPI-16: System Uptime
Target: 99% availability during business hours (8 AM - 6 PM, Monday-Friday)
Measurement: (Total business hours - downtime hours) / Total business hours × 100
Frequency: Weekly automated monitoring
KPI-17: Search Performance
Target: 95% of searches return results within 5 seconds
Measurement: Automated query response time logging
Frequency: Daily performance monitoring
KPI-18: Report Validation Speed
Target: 95% of reports complete automated validation within 10 seconds
Measurement: Time from upload completion to validation result
Frequency: Daily automated tracking

11.6 Compliance & Audit Metrics
KPI-19: Workflow Stage Compliance
Target: 100% of reports follow mandatory sequential workflow (no stage skipping)
Measurement: Audit log analysis for workflow violations
Frequency: Monthly compliance check
KPI-20: Audit Trail Completeness
Target: 100% of report actions logged with timestamp, user ID, and decision rationale
Measurement: Random sample audit of 50 reports monthly
Frequency: Monthly compliance audit
KPI-21: FATF Reporting Capability
Target: Generate all required FATF statistical reports within 24 hours of request
Measurement: Time from report request to delivery
Frequency: Quarterly test generation

11.7 User Satisfaction Metrics
KPI-22: Analyst Satisfaction
Target: Average satisfaction score ≥4.0/5.0 on quarterly surveys
Measurement: Quarterly user satisfaction survey covering:
Ease of use
Time savings
Feature usefulness
Support responsiveness
Frequency: Quarterly
KPI-23: Reporting Entity Satisfaction
Target: Average satisfaction score ≥3.5/5.0 on semi-annual surveys
Measurement: Semi-annual survey covering:
Submission process ease
Validation feedback clarity
Technical support
System reliability
Frequency: Semi-annually

11.8 Success Criteria Dashboard (Executive View)
The system shall provide an executive dashboard displaying at minimum:
Efficiency: Average processing time (current vs. baseline)
Volume: Total reports received (current month vs. previous month)
Coverage: Digital submission adoption percentage
Quality: Alert true positive rate
Intelligence: Cases opened and intelligence disseminated (month-to-date)
Performance: System uptime percentage
Compliance: Workflow violations count

⚠️ Risks & Open Questions
12.1 Technical Risks
Risk T-1: Data Migration Complexity
Description: Historical Excel reports may have inconsistent formats, making bulk import difficult
Impact: High - delays project timeline, incomplete historical context for profiling
Mitigation: Conduct data quality assessment during Phase 1 kickoff; develop data cleaning scripts; prioritize recent reports (last 12-24 months) for initial import
Open Question: How many years of historical reports exist? What is their format consistency level? We will not be inputting historic data
Risk T-2: Reporting Entity Technical Capability
Description: Some reporting entities may lack IT infrastructure to support API submissions
Impact: Medium - slower adoption, continued manual Excel dependency
Mitigation:Excel upload remains the fallback option; API onboarding is prioritized for capable entities.
Open Question: What percentage of 46+ current reporting entities have dedicated IT staff? Estimated entities with dedicated IT staff: ~22–27; Estimated percentage: ~49% – 60%
Risk T-3: System Performance at Scale
Description: Database performance may degrade as report volume grows beyond 10,000 records
Impact: Medium - slow searches, frustrated users
Mitigation: Performance testing during Phase 1; database optimization; implement archiving strategy for reports older than 5 years
Open Question: What is the projected annual report volume growth rate?

Risk T-4: Infrastructure Dependencies
Description: FIA internet connectivity or power supply interruptions could disrupt operations
Impact: High - system unavailable during outages
Mitigation: Local server deployment (not cloud initially); offline report queuing for reporting entities; backup power requirements in deployment plan
Status: Requires infrastructure assessment before deployment commitment

12.2 Operational Risks
Risk O-1: Change Management Resistance
Description: Analysts accustomed to Excel workflows may resist new system
Impact: High - low adoption, continued parallel Excel usage
Mitigation: Involve analysts in requirements gathering; extensive training program; demonstrate time savings through pilot; management mandate for system usage
Owner: FIA Leadership & Change Management Lead
Risk O-2: Insufficient Training Time
Description: Analysts may not receive adequate training before go-live
Impact: Medium - errors, low productivity during transition
Mitigation: Minimum 3 days hands-on training per user role; training materials in plain language; dedicated support period (first 30 days post-launch); train-the-trainer approach for supervisors
Open Question: What is FIA's typical training capacity? Can analysts be released from duties for 3 consecutive days? Yes
Risk O-3: Reporting Entity Onboarding Delays
Description: Banks and MFIs may delay digital submission adoption due to internal change management
Impact: Medium - slow adoption, continued email submissions
Mitigation: Central Bank of Liberia directive support; phased rollout starting with largest banks; onboarding incentives (faster validation turnaround)
Open Question: Does CBL have authority to mandate digital submission timelines? Yes
Risk O-4: Validation Rule Complexity
Description: Overly strict validation rules may cause excessive report rejections
Impact: Medium - reporting entity frustration, increased support burden
Mitigation: Configurable validation rules; pilot with lenient rules initially; gradual tightening based on submission quality trends; clear error messages
Owner: FIA Compliance Team

12.3 Regulatory & Compliance Risks
Risk R-1: Data Protection Compliance
Description: Liberia may introduce new data protection laws during deployment
Impact: Medium - additional compliance requirements, potential redesign
Mitigation: Design system with encryption and access controls from start; monitor regulatory developments; budget for compliance updates
Status: Legal review required during Phase 1
Risk R-2: FATF Standards Evolution
Description: FATF recommendations may change, requiring feature additions
Impact: Low-Medium - feature gaps, compliance risk
Mitigation: Design modular system architecture (no implementation detail here, but note requirement for flexibility); budget annual enhancement allocation
Owner: FIA Leadership
Risk R-3: Audit Trail Integrity
Description: If audit logs are tampered with or lost, legal cases may be compromised
Impact: High - intelligence inadmissible in court, reputational damage
Mitigation: Immutable audit logs; automated backup verification; regular audit log integrity checks; access restrictions to log data
Status: Critical non-functional requirement (see Section 10.2)

12.4 Resource Risks
Risk RES-1: Budget Constraints
Description: Donor funding may be insufficient or delayed
Impact: High - project delays, scope reduction
Mitigation: Phased approach allows partial delivery; prioritize Phase 1 features; explore alternative funding sources
Open Question: What is the confirmed funding amount and disbursement schedule?
Risk RES-2: Analyst Workload During Transition
Description: Analysts must process current reports while learning new system
Impact: Medium - temporary productivity decrease
Mitigation: Phased rollout (pilot with subset of entities first); temporary support staff or consultant assistance during first 60 days
Owner: FIA Management
Risk RES-3: Technical Support Availability
Description: If vendor/developer support is insufficient, bugs may disrupt operations
Impact: Medium - user frustration, workarounds, system abandonment risk
Mitigation: Clear support SLA in deployment contract; local technical resource training; comprehensive documentation; user community/forum for peer support
Open Question: What is FIA's current IT support capacity? They have a capable IT department

12.5 Security Risks
Risk S-1: Unauthorized Data Access
Description: Breach could expose sensitive financial intelligence to criminals
Impact: Critical - compromised investigations, safety risk to FIA staff
Mitigation: Strong authentication; role-based access control; all access logged; regular security audits; physical server security
Status: Highest priority security requirement
Risk S-2: Insider Threat
Description: FIA staff member could misuse access to leak intelligence
Impact: High - compromised investigations, corruption risk
Mitigation: Comprehensive audit logging; supervisor review of unusual access patterns; principle of least privilege; mandatory background checks for system users
Owner: FIA Security Officer
Risk S-3: Reporting Entity Credential Compromise
Description: Bank login credentials stolen, fraudulent reports submitted
Impact: Medium - false intelligence, resource waste
Mitigation: Two-factor authentication for reporting entities; submission confirmation emails; suspicious submission pattern detection
Open Question: What authentication methods can reporting entities realistically support?

12.6 Open Questions Requiring Resolution
Strategic Questions:
What is the exact confirmed budget for Phases 1-3? 
Information is not available. But this is their confirmed year budget for 2025. We charged them



Category
FY 2025 Approved
21 – Compensation of Employees
$869,472
22 – Use of Goods & Services
$931,584
31 – Non-Financial Assets (PSIP / Capital)
$130,500
Total Estimated Budget for FY 2025
$1,931,556


What is the deployment timeline constraint (hard deadline)? No hard deadline yet.
Is Central Bank of Liberia prepared to mandate digital submission for all entities? Yes
Who is the designated project owner within FIA with decision-making authority? OIC and Director of Operations
Operational Questions: 5. How many historical reports exist, and in what formats? In excel and in the local reporting system called NAS.
Hybrid approach is usually the most realistic for data migration:
Start fresh for new submissions on Day 1


Ensures clean, validated data going forward (especially if you enforce structured templates/API).


Backfill targeted historical data in phases
 Import the “highest ROI” history first:


All active/open cases + related reports and documents


High-risk subjects/entities lists (PEPs, watchlists used internally, known typologies)


Recent history window (commonly last 2–5 years) depending on retention needs and investigative value


Keep the rest as an accessible archive


Preserve raw Excel/email artifacts in a repository, linkable from the case if needed, without forcing full normalization of every record immediately.

6. What is the current average report volume per year? 
This is the yearly projection.
Year
Lower Bound (Est.)
Upper Bound (Est.)
Year 0 (Baseline)
~1.84 M
~4.08 M
Year 1
~2.11 M
~4.69 M
Year 2
~2.43 M
~5.39 M
Year 3
~2.79 M
~6.20 M
Year 4
~3.21 M
~7.13 M
Year 5
~3.69 M
~8.20 M
Year 6
~4.24 M
~9.43 M
Year 7
~4.88 M
~10.84 M


7. What is FIA's current IT infrastructure (server capacity, internet bandwidth, backup systems)? 8. What is the staff turnover rate for analysts? (impacts training investment)
Technical Questions: 9. Are reporting entities willing/able to use API integrations, or is Excel upload sufficient for 90%+?~49-60% of entities will be able. 
10. What external data sources (sanctions lists, PEP databases) does FIA already have access to? None.
11. Does FIA have existing relationships with law enforcement agencies for intelligence dissemination (impacts dissemination module requirements)? Yes, they are partners
Compliance Questions: 12. What are Liberia's specific data retention requirements for financial intelligence? 7 years.
13. Are there data sovereignty requirements (must data stay in Liberia)? 
14. What audit standards must the system comply with?

🕒 Out-of-Scope / Deferred Ideas
13.1 Phase 4+ Future Enhancements (Not in Initial 15-Month Scope)
Feature Idea: Mobile Application
Description: Mobile app for analysts to review alerts and approve actions on-the-go
Rationale for Deferral: Web-based system sufficient for office-based analysts; mobile adds complexity and cost; prioritize core functionality first
Potential Timeline: 18-24 months post-launch if user demand emerges
Feature Idea: Multi-Language Support
Description: Interface translation to French and local languages
Rationale for Deferral: All FIA staff and reporting entity compliance officers work in English; no immediate need identified
Potential Timeline: Consider if regional expansion occurs
Feature Idea: Blockchain Transaction Analysis
Description: Specialized tools for cryptocurrency and blockchain transaction tracing
Rationale for Deferral: Current report volumes do not include significant crypto activity; specialized skillset required
Potential Timeline: Monitor crypto adoption in Liberia; revisit in 24+ months
Feature Idea: Predictive ML/AI Risk Scoring
Description: Machine learning models to predict high-risk subjects before reports are filed
Rationale for Deferral: Requires large historical dataset (2-3 years minimum); rule-based alerting sufficient initially; ML expertise scarce
Potential Timeline: Phase 4 (24+ months) after sufficient training data accumulated
Feature Idea: Regional FIU Network Integration
Description: Cross-border intelligence sharing with neighboring countries' FIUs
Rationale for Deferral: Requires legal frameworks, data sharing agreements, regional coordination beyond FIA control
Potential Timeline: Long-term strategic goal (3-5 years)
Feature Idea: Real-Time Transaction Monitoring
Description: Live transaction stream analysis from banks (not just reports)
Rationale for Deferral: Out of scope for FIU role (banks responsible for transaction monitoring); infrastructure intensive; privacy concerns
Status: Permanent exclusion—not FIA mandate


14. Access & Permissions
14.1 Role Definitions (Revised)
Role 1: Technical System Administrator (Tech Admin)
Purpose: Maintain system availability and security without routine access to sensitive intelligence content.
Responsibilities
Manage infrastructure, backups, recovery, uptime monitoring
Configure technical settings (security, integrations, performance)
Create/disable user accounts based on approved requests
Monitor security events and system health
Access Level
Full access to system configuration, health metrics, and technical logs
No default access to report/case/intelligence content
Constraints
Cannot delete/modify audit logs
All actions logged
Break-glass access to content requires OIC authorization, time limit, and mandatory justification

Role 2: Compliance Officer (Validation + CTR Reviewer)
(This single role now covers both manual validation and CTR compliance review.)
Purpose: Ensure submissions are usable and compliant; manage CTR processing and escalation recommendations.
Responsibilities
Perform manual validation for reports that pass automated validation:
Accept / Return for Correction / Reject with documented reason
Add validation notes visible downstream
Conduct CTR compliance review on assigned CTRs:
Document findings and red flags
Flag CTRs for escalation with justification
Recommend disposition outcomes per policy (e.g., Archive/Monitor/Escalate recommendation)
Provide structured feedback to reporting entities (return/reject reasons)
Access Level
Access to validation queue items assigned/claimed for validation
Access to CTRs assigned to them for compliance review
Constraints
Cannot approve escalation (supervisor/head approval required)
Cannot access STR analysis workspace unless explicitly authorized
Cannot modify reported transaction data (read-only); only decisions/notes

Role 3: Head of Compliance (Compliance Supervisor)
Purpose: Own the end-to-end compliance workflow: validation oversight, CTR assignment, quality, and escalation decisions.
Responsibilities
Assign/reassign CTRs to compliance officers with deadlines
Oversee manual validation performance and quality
Review escalation recommendations and approve/reject with reasoning
Manage compliance KPIs (throughput, backlog, aging, escalation rate)
Configure compliance-level CTR alert rules (if enabled by governance)
Access Level
Access to all reports in compliance workflow (validation + CTR compliance)
Access to escalation queues and escalation decisions
Constraints
Cannot disseminate intelligence
Must document reasons for approvals/rejections/reassignments
Cannot delete/modify audit logs

Role 4: Head of Analysis (Analysis Supervisor / Case Approver)
Purpose: Own STR/escalated-CTR workflow, approve cases, and enforce analysis quality.
Responsibilities
Assign STRs and escalated CTRs to analysts with deadlines
Review/return/approve analysis outputs with documented justification
Approve/reject case proposals
Configure analysis-level alert rules (if enabled)
Access Level
Access to all STRs and escalated CTRs under analysis (oversight)
Access to case proposal approvals and analysis dashboards
Constraints
Cannot disseminate intelligence (OIC only)
Cannot delete/modify audit logs

Role 5: Analyst (Analysis Department)
Purpose: Investigate assigned STRs and escalated CTRs; build evidence and propose cases.
Responsibilities
Conduct analysis on assigned STRs and escalated CTRs
Link subjects, accounts, reports, and supporting documents
Draft tactical/strategic analysis outputs
Propose cases for Head of Analysis review
Access Level
Access to assigned STRs and escalated CTRs + analysis tools + linked documents/case workspace as assigned
Constraints
Cannot approve cases
Cannot disseminate intelligence
Cannot access non-escalated CTRs unless escalated/authorized
All actions logged

Role 6: Director of Operations
Purpose: Executive oversight across compliance + analysis; resolve disputes and bottlenecks.
Responsibilities
View end-to-end operational performance (CTR + STR)
Monitor throughput, bottlenecks, aging, and capacity utilization
Resolve escalation disputes (when policy requires) and authorize exceptions
Access Level
Oversight read access across both workflows
Constraints
Not the default dissemination authority (OIC only)
Cannot delete/modify audit logs
Must document reasons for overrides/authorizations

Role 7: Officer-in-Charge (OIC)
Purpose: Final authority for intelligence dissemination and sensitive exceptions.
Responsibilities
Review intelligence packages and evidence completeness
Approve/return intelligence outputs with justification
Disseminate intelligence to law enforcement and track dissemination logs
Authorize break-glass access for Tech Admin
Access Level
Oversight access across all workflows and modules as required for authorization
Dissemination module access
Constraints
All approvals/dissemination actions immutable and logged
Cannot delete/modify audit logs

Role 8: Reporting Entity User
Purpose: Submit reports and track outcomes for their institution only.
Responsibilities
Submit reports via API (goAML XML) or Excel fallback
Track submission status and respond to validation feedback
View rejection/return reasons and resubmit corrected reports
Access Level
Only their own entity submissions, statuses, and validation feedback
Constraints
No visibility into FIA internal workflows, assignments, analysis, cases, or intelligence

14.2 Permission Matrix (Revised)
✅ Yes | ⚠️ Limited/Controlled | ❌ No
Function
Tech Admin
Compliance Officer
Head of Compliance
Head of Analysis
Analyst
Director Ops
OIC
Reporting Entity
Submit Reports
❌
❌
❌
❌
❌
❌
❌
✅
View own submissions/status
❌
❌
❌
❌
❌
❌
⚠️
✅
Automated validation execution
✅ (system)
❌
❌
❌
❌
❌
❌
❌
View Manual Validation Queue
❌*
✅ (assigned/claimed)
✅ (all)
⚠️ (oversight)
❌
✅ (oversight)
✅ (oversight)
❌
Manual Validation (Accept/Return/Reject)
❌*
✅
⚠️ (override)
❌
❌
⚠️ (oversight)
⚠️ (exception)
❌
View CTR Compliance Queue
❌*
✅ (assigned)
✅ (all)
❌
❌
✅ (oversight)
✅ (oversight)
❌
Perform CTR Compliance Review
❌*
✅
✅ (oversight)
❌
❌
✅ (oversight)
✅ (oversight)
❌
Flag CTR for Escalation
❌*
✅
✅
❌
❌
✅ (oversight)
✅ (oversight)
❌
Approve/Reject Escalation
❌*
❌
✅
❌
❌
⚠️ (override)
⚠️ (override)
❌
Assign/Reassign CTRs
❌*
❌
✅
❌
❌
⚠️ (exception)
⚠️ (override)
❌
Assign/Reassign STRs & Escalated CTRs
❌*
❌
❌
✅
❌
⚠️ (exception)
⚠️ (override)
❌
View Assigned Analysis Reports
❌*
❌
❌
✅ (all in dept)
✅ (own)
✅ (oversight)
✅
❌
Conduct Analysis
❌*
❌
❌
✅ (oversight)
✅
✅ (oversight)
✅ (oversight)
❌
Propose Case
❌*
❌
❌
⚠️ (optional)
✅
⚠️ (oversight)
✅ (oversight)
❌
Approve/Reject Case Proposal
❌*
❌
❌
✅
❌
⚠️ (exception)
⚠️ (override)
❌
Approve Intelligence for Dissemination
❌*
❌
❌
❌
❌
❌
✅
❌
Disseminate Intelligence
❌*
❌
❌
❌
❌
❌
✅
❌
View Dashboards/Statistics
✅ (system)
⚠️ (limited)
✅
✅
⚠️ (limited)
✅
✅
❌
View Audit Logs
✅
❌
✅
✅
❌
✅
✅
❌
Delete/Modify Audit Logs
❌
❌
❌
❌
❌
❌
❌
❌

* Tech Admin content access is break-glass only (OIC-authorized, time-limited, mandatory reason, high-visibility audit flag).

14.3 Access Control Rules
AC-1: RBAC Enforcement
Each user shall have exactly one primary role; permissions derive from role.
AC-2: Data Isolation by Assignment
Compliance Officers access only validation items/CTRs assigned/claimed by them.
Analysts access only STRs/escalated CTRs assigned to them.
Oversight exceptions: Head of Compliance (all compliance workflow), Head of Analysis (all analysis workflow), Director Ops (oversight), OIC (oversight).
AC-3: Reporting Entity Isolation
Reporting entities only access their own submissions/status/errors.
AC-4: Workflow Boundary Enforcement
Compliance domain (Validation + CTR Compliance): Compliance Officer + Head of Compliance
Analysis domain (STR + Escalated CTR): Analyst + Head of Analysis
Dissemination: OIC only
AC-5: Audit Trail Immutability
Audit logs are append-only, tamper-evident, and immutable for all roles.
AC-6: Break-Glass (Tech Admin)
Requires OIC authorization, mandatory reason, time limit, scoped access where feasible, and prominent audit flagging.
AC-7: Re-Authentication for Sensitive Actions
Required for: escalation approvals, case approvals, rule changes, intelligence approval, dissemination, break-glass activation.
AC-8: Session Timeout
30 minutes inactivity timeout.
AC-9: Failed Login Lockout
Lock after 5 failed attempts for 30 minutes; notify Tech Admin and OIC.
AC-10: Least Privilege
Temporary privilege elevation requires OIC approval, documented reason, scope, and expiry.
AC-11: Rule Domain Separation
Compliance-level rules managed by Head of Compliance; analysis-level rules managed by Head of Analysis. Tech Admin implements only with approval logging.
AC-12: Dissemination Authority Restriction
Only OIC can finalize, approve, and disseminate intelligence.

14.4 Data Visibility Boundaries
Boundary 1: Pre-Validation Submissions (Received / Automated Validation)
Visible to: System processes; Head of Compliance (oversight); Director Ops (oversight); OIC (oversight); Tech Admin (metadata/logs only).
Not visible to: Analysts; other reporting entities.
Boundary 2: Manual Validation Stage (Now under Compliance Officer)
Visible to: Assigned/claiming Compliance Officers; Head of Compliance (all); Director Ops (oversight); OIC (oversight).
Not visible to: Analysts; reporting entities beyond their own status view.
Boundary 3: CTR Compliance Workflow
Visible to: Assigned Compliance Officer; Head of Compliance; Director Ops (oversight); OIC (oversight).
Not visible to: Analysts (unless CTR escalated).
Boundary 4: STR / Escalated CTR Analysis Workflow
Visible to: Assigned Analyst; Head of Analysis; Director Ops (oversight); OIC (oversight).
Not visible to: Compliance Officers (unless explicitly authorized by OIC policy exception).
Boundary 5: Case Proposals + Approved Case Files
Visible to: Assigned Analyst (case owner); Head of Analysis; Director Ops (oversight); OIC (oversight).
Not visible to: Compliance Officers unless explicitly authorized.
Boundary 6: Final Intelligence + Dissemination Records
Visible to: OIC (full); Director Ops (read/oversight); Head of Analysis (read/awareness, optional).
Not visible to: Compliance Officers/Analysts unless explicitly permitted.

14.5 Special Access Scenarios
Scenario 1: Compliance Officer Leave
Head of Compliance may reassign validation items/CTRs with reason logged; notifications sent.
Scenario 2: Analyst Leave
Head of Analysis may reassign STRs/escalated CTRs and cases with reason logged; notifications sent.
Scenario 3: Escalation Dispute
Director of Operations may review compliance justification + analysis capacity concerns and authorize final decision with documented reason.
Scenario 4: Break-Glass Technical Support
Tech Admin requests; OIC approves time-bound scoped access; system generates incident access report automatically.

🧩 Project Breakdown
15.1 Purpose of This Section
This section translates the PRD requirements into a logical, dependency-aware sequence of deliverable tasks. Each task represents a coherent unit of work that can be assigned, tracked, and verified.
Constraints
Defines what must be built and in what order
Does not define architecture, frameworks, libraries, or implementation details
Shows dependencies to support sequencing
Each task ends in a testable, demonstrable deliverable

15.2 Phase 1 — Foundation (Months 1–8)
Milestone 1.1: Project Initialization + Governance Alignment (Month 1)
Task 1.1.1 — PRD Validation & Workflow Alignment Workshop
Description: Confirm CTR vs STR workflow paths, escalation chain, and role responsibilities (Compliance Officer, Head of Compliance, Analyst, Head of Analysis, Director Ops, OIC, Tech Admin, Reporting Entity User).
Deliverable: Signed-off PRD addendum clarifying workflows, roles, SLAs, and status definitions.
Dependencies: None
Acceptance: FIA leadership confirms roles + workflow definitions (including CTR escalation decisions and OIC dissemination authority).
Task 1.1.2 — Access Control + Permission Matrix Finalization
Description: Finalize RBAC rules, assignment-based visibility, break-glass policy for Tech Admin, and sensitive action re-authentication requirements.
Deliverable: Approved “Access & Permissions Specification” aligned with Section 14.
Dependencies: Task 1.1.1
Acceptance: FIA leadership approves permission boundaries for CTR/STR visibility, escalation approvals, and dissemination.
Task 1.1.3 — Infrastructure & Operational Readiness Assessment
Description: Confirm server/power/internet readiness, backup expectations, operational uptime window, and deployment constraints (local hosting).
Deliverable: Infrastructure readiness report + operational constraints checklist.
Dependencies: None
Acceptance: Go/no-go readiness decision with documented mitigations.
Task 1.1.4 — Historical Data Decision & Archive Posture
Description: Confirm “Start fresh Day 1” as policy; define how legacy Excel/NAS history will be retained/accessed as an external archive (without full import).
Deliverable: Historical data posture document (what stays outside, what can be manually attached later as documents).
Dependencies: Task 1.1.1
Acceptance: FIA approves “no bulk historical import” + archival reference approach.

Milestone 1.2: Core Data & Submission Standards (Months 2–3)
Task 1.2.1 — Report/Subject Data Specification (goAML Alignment)
Description: Define required data fields and identifiers for STR/CTR , including subject identifiers.
Deliverable: Data dictionary + report identifier specification (fields, mandatory/optional, validation expectations).
Dependencies: Task 1.1.1
Acceptance: FIA compliance + analysis leads confirm the field requirements support Phase 1 workflows.
Task 1.2.2 — Excel Template Standardization (STR/CTR) + Instructions
Description: Produce standardized STR/CTR templates with mandatory fields clearly marked and aligned with validation rules.
Deliverable: Final STR/CTR Excel templates + user instruction guide.
Dependencies: Task 1.2.1
Acceptance: FIA confirms templates match reporting needs and can be used by entities with low technical capacity.
Task 1.2.3 — Automated Validation Rules Specification
Description: Define validation checks: file type, schema compliance (XML), mandatory fields, data types, logical constraints, and error message rules.
Deliverable: Validation rule specification with pass/fail examples and error catalog.
Dependencies: Task 1.2.2
Acceptance: FIA approves validation rules and rejection/return standards.
Task 1.2.4 — Deduplication Rule Specification (Excel + API)
Description: Define how duplicates are detected (entity report ID, transaction identifiers, key content fingerprints) and how collisions are handled.
Deliverable: Deduplication specification + duplicate response messages.
Dependencies: Task 1.2.1
Acceptance: FIA approves dedup behavior (block vs flag for manual review) per report type.

Milestone 1.3: Reporting Entity Onboarding + Submission Channels (Months 3–4)
Task 1.3.1 — Reporting Entity Registration & Account Provisioning
Description: Enable creation of reporting entities and their users, scoping access strictly to their entity submissions.
Deliverable: Entity registration workflow + entity/user management procedures.
Dependencies: Task 1.1.2
Acceptance: A reporting entity user can log in and see only their own submissions and feedback.
Task 1.3.2 — Excel Submission Portal (Fallback) + Reference Number Generation
Description: Provide Excel upload submission with instant reference number and confirmation view.
Deliverable: Excel upload submission flow + confirmation screen + reference number rules.
Dependencies: Task 1.2.2
Acceptance: Valid file upload generates reference within required time and creates submission record.
Task 1.3.3 — API Submission Interface (goAML XML) + Credentials Issuance
Description: Provide secure API submission for STR/CTR in goAML XML; issue credentials per entity; define machine-readable responses.
Deliverable: API submission spec implemented (submit endpoint + response format) + credential issuance workflow.
Dependencies: Task 1.3.1, Task 1.2.1, Task 1.2.3
Acceptance: Valid goAML XML submission returns accepted + reference; invalid returns rejected + errors.
Task 1.3.4 — Submission Status Tracking (Reporting Entity View)
Description: Reporting entities can track submission status (Submitted/Validated/Rejected/Under Review/etc.) with timestamps.
Deliverable: Reporting entity dashboard for submission status + per-submission detail page.
Dependencies: Task 1.3.2 (and/or 1.3.3)
Acceptance: Entity can track at least 5 submissions and see live stage changes.
Task 1.3.5 — Submission Logging & Audit Events (Submission Layer)
Description: Log all submission attempts (file size, timestamp, entity, format, outcome; API source identifiers where available).
Deliverable: Submission audit log reporting for FIA oversight roles.
Dependencies: Task 1.3.2, Task 1.3.3
Acceptance: FIA can retrieve submission logs by entity and date range.

Milestone 1.4: Validation Workflows (Automated + Manual under Compliance Officer) (Months 4–5)
Task 1.4.1 — Automated Validation Execution + Error Reporting
Description: Execute automated validation within defined time; auto-reject failures with structured error output and status update.
Deliverable: Automated validation outcomes + error report generation + rejection notifications trigger.
Dependencies: Task 1.2.3
Acceptance: Mixed test set correctly passes/rejects with clear field-level errors.
Task 1.4.2 — Manual Validation Queue (Compliance Officer)
Description: Queue of items that passed automated validation; Compliance Officer performs Accept/Return/Reject with mandatory reasons.
Deliverable: Manual validation queue + decision workflow + decision logging.
Dependencies: Task 1.4.1
Acceptance: Items cannot proceed without manual decision; reject/return requires reason.
Task 1.4.3 — Reporting Entity Feedback & Resubmission Linking
Description: Returned submissions are resubmitted as corrected versions linked to the original; show attempt count.
Deliverable: Return notifications + resubmission workflow + linkage view.
Dependencies: Task 1.4.2, Task 1.3.4
Acceptance: A returned report can be resubmitted and appears as “Resubmission #n” linked to original.
Task 1.4.4 — Validation Audit Trail (Immutable Events)
Description: Ensure each automated/manual validation action is recorded with actor, timestamp, decision, and reason.
Deliverable: Validation audit report view (queryable by report/date/user).
Dependencies: Task 1.4.1, Task 1.4.2
Acceptance: Sample audit confirms complete, non-editable history per report.

Milestone 1.5: CTR Compliance Workflow + Escalation (Months 5–6)
Task 1.5.1 — CTR Compliance Queue (Assigned CTR Review)
Description: CTRs that pass manual validation enter CTR compliance review workflow for assigned Compliance Officers.
Deliverable: CTR compliance queue with review checklist capture and outcome recording.
Dependencies: Task 1.4.2
Acceptance: CTRs appear only to assigned Compliance Officers; decisions recorded.
Task 1.5.2 — CTR Escalation Recommendation (Compliance Officer → Head of Compliance)
Description: Compliance Officers can flag CTRs for escalation with justification; cannot finalize escalation.
Deliverable: “Flag for Escalation” workflow + justification capture + escalation queue.
Dependencies: Task 1.5.1
Acceptance: Flagging requires reason; flagged CTR appears for Head of Compliance decision.
Task 1.5.3 — Escalation Decision & Dispute Path (Head of Compliance + Director Ops override)
Description: Head of Compliance approves/rejects escalation; Director Ops can override in disputes.
Deliverable: Escalation decision UI + override path + immutable decision logging.
Dependencies: Task 1.5.2
Acceptance: Approved escalations convert to “Escalated CTR” and route to Analysis; denials return to CTR disposition.
Task 1.5.4 — Handoff to Analysis Queue (Escalated CTR Creation)
Description: Approved escalation creates an analysis-ready item visible to Head of Analysis and eligible for analyst assignment.
Deliverable: Escalated CTR entry in Analysis intake + escalation context visible to analysts.
Dependencies: Task 1.5.3
Acceptance: Analyst view includes original CTR data + escalation justification.
Task 1.5.5 — Escalation Metrics & Dashboards (Compliance + Analysis)
Description: Track escalation rate, volumes, and downstream outcomes for quality measurement.
Deliverable: Escalation metric widgets for compliance and analysis dashboards.
Dependencies: Task 1.5.3, Task 1.5.4
Acceptance: Dashboard shows escalation rate and escalated CTR inflow vs direct STR inflow.

Milestone 1.6: Assignment + Workload Distribution (CTR + STR) (Months 6–7)
Task 1.6.1 — Compliance Assignment & Workload Dashboard (Head of Compliance)
Description: Assign/reassign CTRs to Compliance Officers with deadlines; monitor backlog aging and overdue CTRs.
Deliverable: Compliance workload dashboard + assignment actions + overdue flagging.
Dependencies: Task 1.5.1
Acceptance: Head of Compliance can see workload counts and overdue CTRs; reassignment requires reason.
Task 1.6.2 — Analysis Assignment & Workload Dashboard (Head of Analysis)
Description: Assign STRs and escalated CTRs to analysts with deadlines; track age and overdue items.
Deliverable: Analysis workload dashboard + assignment actions + overdue flagging.
Dependencies: Task 1.3.2/1.3.3 (STR intake exists), Task 1.5.4 (escalated intake exists)
Acceptance: Analysts see only assigned items; Head of Analysis sees full department workload.
Task 1.6.3 — Auto-Assignment Option (Lowest Workload Rule)
Description: Optional auto-assignment for CTR (Head of Compliance domain) and STR/escalated CTR (Head of Analysis domain).
Deliverable: Auto-assign feature + assignment logic definition + audit record of auto-assign action.
Dependencies: Task 1.6.1, Task 1.6.2
Acceptance: Auto-assign consistently selects lowest workload and logs decision.
Task 1.6.4 — Director Ops Unified Oversight Dashboard
Description: Director Ops sees unified compliance + analysis workloads, bottlenecks, and aging.
Deliverable: Unified oversight dashboard view (read/oversight).
Dependencies: Task 1.6.1, Task 1.6.2
Acceptance: Director Ops view shows combined metrics without violating assignment-level access rules.

Milestone 1.7: Subject Profiling + Alerts + Workflow Enforcement (Months 7–8)
Task 1.7.1 — Subject Profile Creation + Linking Rules
Description: Create subject profiles and link reports by identifiers; support merge of duplicates; apply frequency flags.
Deliverable: Subject profiling module (create/link/merge) + high-frequency flagging.
Dependencies: Task 1.3.x submission intake + Task 1.4 validation outcomes
Acceptance: New report creates/links subjects; duplicates can be merged with audit log.
Task 1.7.2 — Data Visibility Boundaries (CTR vs STR Access Rules)
Description: Enforce analyst restriction on non-escalated CTRs and assignment-based access across workflows.
Deliverable: Verified access boundary behavior aligned with Section 14.4.
Dependencies: Task 1.1.2, Task 1.7.1
Acceptance: Analysts cannot access non-escalated CTRs; Compliance can; oversight roles can per policy.
Task 1.7.3 — Rule Configuration (Separated Domains)
Description: Enable compliance-level alert rules (Head of Compliance) and analysis-level alert rules (Head of Analysis) with domain separation.
Deliverable: Rule configuration UI with permission enforcement and change logging.
Dependencies: Task 1.1.2
Acceptance: Head of Compliance cannot edit analysis rules; Head of Analysis cannot edit compliance rules.
Task 1.7.4 — Alert Generation + Alert Review Dashboards (Compliance + Analysis)
Description: Generate alerts on validated reports; show alerts in role-relevant dashboards; allow disposition labels.
Deliverable: Alert engine + compliance alert dashboard + analysis alert dashboard + disposition capture.
Dependencies: Task 1.7.3, Task 1.4.1, Task 1.5.4
Acceptance: Trigger tests generate expected alerts; users can mark True/False/Under Investigation.
Task 1.7.5 — Workflow Engine (Two Mandatory Sequential Workflows)
Description: Enforce CTR workflow and STR/escalated workflow sequencing; prevent stage skipping; enable return-to-previous stage with reasons.
Deliverable: Workflow enforcement + stage transition logging + reminders per stage aging thresholds.
Dependencies: Task 1.5 (CTR flow) + Task 1.6 (assignments)
Acceptance: Reports cannot jump stages; audit trail shows complete sequence including CTR→Escalated transition.
Task 1.7.6 — Immutable Audit Trail + Compliance Reporting Views
Description: Ensure audit logs are append-only and queryable for oversight and audits.
Deliverable: Audit log viewer + exportable audit reports for FIA oversight roles.
Dependencies: Tasks 1.3–1.7 (events exist)
Acceptance: Random sample of reports shows complete lifecycle and actor attribution.

Milestone 1.8: UAT, Training, Pilot, Go-Live (Month 8)
Task 1.8.1 — Role-Based Training Materials
Description: Develop training packs for Compliance Officer, Head of Compliance, Analyst, Head of Analysis, Director Ops, OIC, Reporting Entity User.
Deliverable: Training guides + exercises per role.
Dependencies: All Phase 1 features complete
Acceptance: FIA confirms materials are understandable for basic computer literacy.
Task 1.8.2 — User Acceptance Testing (UAT) with FIA
Description: Execute UAT scenarios covering submission, validation, CTR review, escalation, analysis assignment, alerts, workflow enforcement, audit logs.
Deliverable: UAT report with pass/fail + defect log.
Dependencies: Tasks 1.3–1.7
Acceptance: UAT acceptance threshold met (critical flows pass).
Task 1.8.3 — Pilot Launch (Mixed Submission: Excel + API)
Description: Pilot with a small set of reporting entities including at least one API-integrated entity and multiple Excel fallback users.
Deliverable: Pilot performance report (volumes, rejection rates, turnaround times, user feedback).
Dependencies: Task 1.8.2
Acceptance: Pilot runs for agreed window with acceptable defect rate and stable operations.
Task 1.8.4 — Production Go-Live + Adoption Tracking
Description: Open portal to all active reporting entities; monitor adoption KPI; support onboarding.
Deliverable: Go-live report + first-month KPI snapshot (adoption, validation pass rate, processing time).
Dependencies: Task 1.8.3
Acceptance: Target adoption milestone achieved for first month (per KPI plan) and workflows operate end-to-end.

15.3 Phase 2 — Intelligence (Months 9–14)
Milestone 2.1: Ad-Hoc Search & Query (Feature 9)
Task 2.1.1 — Search Criteria + Access-Controlled Results
Deliverable: Search interface supporting multi-criteria + role-based result filtering.
Dependencies: Phase 1 data + access control (Task 1.7.2)
Acceptance: Analysts see STR/escalated results only; compliance sees CTR scope; all searches logged.
Task 2.1.2 — Saved Queries + Export (Excel/PDF)
Deliverable: Saved searches + export of authorized results.
Dependencies: Task 2.1.1
Acceptance: Saved query reruns correctly; export excludes unauthorized records.

Milestone 2.2: Structured Tactical & Strategic Analysis (Feature 10)
Task 2.2.1 — Tactical Analysis Templates + Evidence Linking
Deliverable: Tactical template with required sections; link to reports/subjects/docs.
Dependencies: Phase 1 workflow + subject profiling
Acceptance: Template auto-fills subject/report data and shows evidence base clearly.
Task 2.2.2 — Strategic Analysis Templates + Typology Tagging
Deliverable: Strategic analysis workflow with typology tags and supervisor review.
Dependencies: Task 2.2.1
Acceptance: Supervisor can comment/return; completion indicators function.

Milestone 2.3: Document Management + Full-Text Search (Feature 11A)
Task 2.3.1 — Document Upload/Tagging/Preview + Access Logging
Deliverable: Document repository linked to subjects/reports/cases with access logs.
Dependencies: Phase 1 access control
Acceptance: Upload/preview works; access logged; deletion rules enforced.
Task 2.3.2 — Full-Text Search on Documents
Deliverable: Full-text search across document content with time threshold.
Dependencies: Task 2.3.1
Acceptance: Search returns correct matches within target time.

Milestone 2.4: Case File Management (Feature 11B)
Task 2.4.1 — Case Proposal → Approval → Case Creation
Deliverable: Case creation only after approval; auto-link evidence; unique case reference.
Dependencies: Phase 1 workflow + Task 2.2 analysis outputs
Acceptance: Approved proposal creates case; case cannot be deleted; closure requires reason.
Task 2.4.2 — Case Timeline + Overdue Flagging + Reassignment
Deliverable: Case timeline + status tracking + overdue flags + reassignment logging.
Dependencies: Task 2.4.1
Acceptance: Overdue cases appear flagged and are traceable by audit.

Milestone 2.5: Intelligence Report Writer (Feature 12)
Task 2.5.1 — Template-Based Report Drafting from Case Data
Deliverable: Intelligence report templates auto-populated from case files.
Dependencies: Task 2.4.1
Acceptance: Draft generation includes required headers/markings and correct data population.
Task 2.5.2 — Supervisor Approval → Finalization → PDF Export
Deliverable: Approval workflow producing versioned final reports and PDF outputs.
Dependencies: Task 2.5.1
Acceptance: Final reports become read-only and export successfully.

Milestone 2.6: Phase 2 Rollout
Task 2.6.1 — Intelligence Workflow UAT + Training + Production Enablement
Deliverable: Phase 2 UAT report + updated role training packs.
Dependencies: Milestones 2.1–2.5
Acceptance: FIA signs off intelligence feature readiness.

15.4 Phase 3 — Strategic Analytics (Months 15+)
Milestone 3.1: Statistical Reporting & FATF Dashboards (Feature 13)
Task 3.1.1 — KPI Dashboards + Exports
Deliverable: Dashboards for volumes, stage times, escalation rates, productivity; export to PDF/Excel.
Dependencies: Phase 1–2 data and audit completeness
Acceptance: KPI calculations match PRD definitions and can be filtered by date/entity/type.
Task 3.1.2 — Scheduled Reports (Monthly/Quarterly)
Deliverable: Configurable schedule for generating periodic reports for leadership.
Dependencies: Task 3.1.1
Acceptance: Scheduled report runs on configured date/time and produces expected output.

Milestone 3.2: External Data Integration (Feature 14)
Task 3.2.1 — Dataset Ingestion + Match Confidence + Alerting
Deliverable: Sanctions/watchlist ingestion and subject checking with confidence levels and alert creation.
Dependencies: Subject profiling + alerting system
Acceptance: Matches generate alerts and display confidence categories.
Task 3.2.2 — Configurable Update Schedules + Re-Checks
Deliverable: Dataset refresh schedule (daily/weekly/monthly) + re-check logic for subjects.
Dependencies: Task 3.2.1
Acceptance: Dataset updates trigger re-check and new-match alerts with logging.

Milestone 3.3: Network Visualization & Charting (Feature 15)
Task 3.3.1 — Network Diagrams + Filters + Export
Deliverable: Relationship visualization between subjects/accounts/transactions and exportable diagrams.
Dependencies: Subject relationships + case data + external risk flags (optional)
Acceptance: Diagrams generate for a case and export in usable format.

Milestone 3.4: Scale, Audit, and Operational Hardening
Task 3.4.1 — Performance & Data Growth Validation (PRD NFR Targets)
Deliverable: Performance validation report against agreed thresholds (search, dashboards, validation).
Dependencies: Phase 3 features complete
Acceptance: Meets agreed performance acceptance criteria or has approved remediation plan.
Task 3.4.2 — Audit Readiness Review
Deliverable: Audit readiness pack: sample trails, access log checks, retention verification.
Dependencies: Immutable audit trails across all phases
Acceptance: FIA leadership confirms audit readiness.

Milestone 3.5: Phase 3 Training & Final Launch (Month 18)
Task 3.5.1: Develop Phase 3 Training Materials
Description: Create role-based guides and short videos covering Phase 3 capabilities: statistical dashboards, external data integration checks, and network visualization.
Deliverable: Training package split by role:
Supervisors (Head of Compliance, Head of Analysis, Director Ops, OIC): dashboards, oversight reporting, KPI interpretation, export/scheduling
Analysts: external checks usage, match interpretation, alerts triage, network/diagram generation and export
Tech Admin: operational runbooks for dataset refresh schedules, monitoring, and incident handling (content access remains break-glass only)
Dependencies: All Phase 3 features complete (Features 13–15 + Phase 3 hardening tasks).
Acceptance: Materials include practical walkthroughs for 10+ Phase 3 scenarios with sample datasets and expected outcomes.
Task 3.5.2: Conduct Phase 3 User Training
Description: Run a 1-day hands-on training for FIA users focused on strategic analytics workflows and visualization tools.
Deliverable: Training attendance records, competency assessments, and a “common issues” quick reference guide.
Dependencies: Task 3.5.1 (materials ready).
Acceptance:
90%+ of supervisors can generate 3 statistical reports (e.g., volumes by type, processing time by stage, escalation rate) and export to PDF/Excel.
90%+ of analysts can generate and export one network diagram for a case, and interpret external match confidence outputs (Exact/High/Possible/No match).
Task 3.5.3: System Performance Audit (Production-Scale Validation)
Description: Execute performance testing using production-scale data volumes and concurrency assumptions aligned with NFRs and KPI targets.
Deliverable: Performance audit report covering:
search response times
dashboard load times
external dataset recheck runtime behavior
network visualization generation performance thresholds
peak-load validation outcomes and bottlenecks
Dependencies: All Phase 3 features operational with production-scale data.
Acceptance:
95% of searches complete within 5 seconds
dashboards load within 3 seconds under normal load
no critical performance issues that block operational use
Task 3.5.4: Final Production Launch & Handover
Description: Execute final rollout, complete operational handover, and transition into the post-launch support model.
Deliverable: Final handover package including:
user manuals + quick guides
system administration runbooks (backup/restore, monitoring, incident response, dataset refresh operations)
support/SLA document
final acceptance sign-off pack
Dependencies: Task 3.5.3 (system verified stable).
Acceptance:
FIA leadership signs final acceptance document (OIC + Deputy Director General as designated)
all reporting entities are notified of full system availability and the submission channels (API primary, Excel fallback)

15.5 Ongoing Support & Maintenance Tasks (Post-Launch)
Task M-1: Monthly System Health Monitoring
Description: Check uptime, performance metrics, validation error rates, job runtimes (dataset refresh, recheck jobs), and application logs.
Deliverable: Monthly health report for FIA leadership (Director Ops + OIC) with trend notes and corrective actions.
Frequency: Monthly (ongoing).
Task M-2: Quarterly Security Audits
Description: Review access logs, failed login attempts, role/permission changes, break-glass activations, and unusual access patterns.
Deliverable: Security audit report with findings, remediation actions, and closure tracking.
Frequency: Quarterly (ongoing).
Task M-3: User Support & Helpdesk
Description: Handle user issues and “how-to” support, with priority classification and tracking.
Deliverable: Ticket resolution within SLA:
Critical: 4 hours
Standard: 24 hours
Frequency: Ongoing.
Task M-4: Annual Enhancement Planning
Description: Collect feedback from FIA + reporting entities; analyze KPI outcomes; define next-year enhancement priorities (without expanding core mandate).
Deliverable: Annual enhancement roadmap with prioritized backlog and estimated delivery windows.
Frequency: Annually.
Task M-5: External Data Maintenance
Description: Monitor dataset update success (sanctions/watchlists), match quality indicators (false positive patterns), and refresh schedule reliability.
Deliverable: Integration health report (job success rates, exceptions, match anomaly trends).
Frequency: Weekly automated checks + monthly manual verification.

15.6 Success Criteria for Project Completion (Revalidated to Match Current Roles + FR Context)
The project is considered successfully completed when:
All Phase 1–3 Features Delivered
All features from digital submission through network visualization are operational and tested in production.
User Adoption Achieved
70%+ of reporting entities submitting digitally (API and/or Excel portal)
100% of FIA analysts using the system for daily STR/escalated-CTR work
Compliance uses the system for CTR validation/review and escalation recommendations/decisions per workflow rules.
Performance Targets Met
Average processing time reduced to 18 days (60% improvement from baseline), measured by system timestamps from submission to dissemination completion.
Training Completed
90%+ of users demonstrate role competency:
Heads/Directors/OIC: dashboards, oversight reports, exports
Analysts: external checks + diagrams + case analytics tools
Compliance: escalation metrics comprehension and CTR workflow performance monitoring
Stability Verified
99% uptime during business hours for 30 consecutive days, excluding planned maintenance.
Compliance & Audit Readiness Proven
Audit trails are immutable and reconstructable for all report lifecycles, including CTR→Escalated CTR transitions and dissemination events.
Documentation Delivered
Complete user manuals, operational runbooks, support/SLA procedures, and dataset refresh procedures delivered to FIA.
FIA Acceptance
Formal sign-off by designated decision owners (OIC + Director Ops), with acknowledged operational ownership and support path.

📎 Appendices
Appendix A: Glossary of Terms
AML/CFT: Anti-Money Laundering / Countering the Financing of Terrorism
CBL: Central Bank of Liberia
CTR: Currency Transaction Report - report of large cash transactions above defined threshold
DNFBP: Designated Non-Financial Businesses and Professions (e.g., casinos, real estate agents, lawyers)
EFTR: Electronic Funds Transfer Report - report of electronic transfers, often cross-border
FATF: Financial Action Task Force - international standard-setting body for AML/CFT
FIA: Financial Intelligence Agency of Liberia
FIU: Financial Intelligence Unit (generic term; FIA is Liberia's FIU)
goAML: Global Anti-Money Laundering software standard developed by UN Office on Drugs and Crime
KYC: Know Your Customer - identity verification documents and processes
MFI: Microfinance Institution
ML/TF: Money Laundering / Terrorist Financing
PEP: Politically Exposed Person - individual holding prominent public position, higher corruption risk
RBAC: Role-Based Access Control - permissions determined by user role
STR: Suspicious Transaction Report - report filed when transaction appears suspicious
Typology: Common money laundering or terrorist financing pattern/method

Appendix B: References
FATF Recommendation 29: Financial Intelligence Units (2012-2023 standards)
Liberian AML/CFT Legislation: [To be specified by FIA Legal Department]
goAML Technical Documentation: United Nations Office on Drugs and Crime (UNODC)
FIA Current Operational Procedures: [Internal FIA reference documents]

Appendix C: Document Approval (Updated)
Role
Name
Signature
Date
Product Manager (Author)
RegTech Product Management




FIA Project Co-Owner / Decision Authority
Officer-in-Charge (OIC) – Mohammed A. Nasser




FIA Project Co-Owner / Decision Authority
Director of Operations




FIA Deputy Director General (Executive Sponsor)
Amos Yollah Boakai




FIA Head of Compliance (Process Owner – Compliance)






FIA Head of Analysis (Process Owner – Analysis)






FIA Technical Lead (Technical Readiness)






Central Bank of Liberia Representative (External Stakeholder)







Notes (Approval Rules)
Final PRD approval requires signatures from OIC + Director of Operations (designated decision authority).
Deputy Director General signs as executive sponsor (oversight).
Heads of Compliance/Analysis sign to confirm workflow/process ownership for their domains.
Technical Lead signs to confirm deployment readiness, not access to sensitive content.

Appendix D: Change Log (Updated)
Version
Date
Author
Changes
0.1
January 2026
RegTech PM
Initial draft
0.2
[TBD – Post PRD Validation Workshop]
RegTech PM
Updates after requirements workshop: refined with the Opex team
1.0
[TBD – Final Approval]
RegTech PM
Final approved PRD version: all open questions resolved/closed, Phase 1–3 scope confirmed, acceptance metrics finalized, approval signatures completed


