FIA-F2: Global Navigation & Information Architecture
Complete Implementation Guide
Based on PTD, PDD, and PRD requirements, here's the comprehensive navigation and information architecture specification.

1. Navigation Hierarchy (Role-Based)
1.1 Primary Workspace Structure
Root Level Workspaces (Role-Gated):
├── Reporting Entity Workspace
│   └── [Reporting Entity User only]
├── Compliance Workspace
│   └── [Compliance Officer, Head of Compliance]
├── Analysis Workspace
│   └── [Analyst, Head of Analysis]
├── Case & Intelligence
│   └── [Analyst, Head of Analysis, Director Ops, OIC]
├── Rules Management
│   └── [Head of Compliance, Head of Analysis]
├── Audit & Oversight
│   └── [Director Ops, OIC, Head of Compliance, Head of Analysis]
└── Administration
    └── [Tech Admin, OIC]

Implementation Rules:
Navigation items render only for authorized roles (RBAC enforcement per PTD Section 8.2)
Unauthorized workspace access → 403 page with clear "Contact administrator" message

2. Detailed Workspace Navigation Maps
2.1 Reporting Entity Workspace
Target Users: Reporting Entity User (banks, MFIs, FinTech, etc.)
📊 Reporting Entity Workspace
├── 📤 Submit Report
│   ├── Upload Excel (Fallback)
│   ├── API Integration Status
│   └── Download Templates
│       ├── STR Template
│       └── CTR Template
├── 📋 My Submissions
│   ├── All Submissions (default view)
│   ├── Filter by Status
│   │   ├── Submitted
│   │   ├── Validated
│   │   ├── Rejected
│   │   ├── Returned for Correction
│   │   └── Under Review
│   ├── Filter by Report Type
│   │   ├── STR
│   │   └── CTR
│   └── Search (by reference number, date range)
├── 🔄 Resubmissions
│   └── Returned reports requiring correction
└── 📊 Submission Statistics
    ├── Total submissions (current month/quarter)
    ├── Acceptance rate
    └── Average validation time

Navigation Behavior:
Default landing: "My Submissions" list view
Submission count badges on "Resubmissions" (if any pending)
Quick submit button always visible in top-right header
Breadcrumb Examples:
Reporting Entity Workspace > Submit Report
Reporting Entity Workspace > My Submissions > FIA-2026-0123
Reporting Entity Workspace > My Submissions > FIA-2026-0123 > Resubmit


2.2 Compliance Workspace
Target Users: Compliance Officer, Head of Compliance
⚖️ Compliance Workspace
├── 📥 Validation Queue
│   ├── Pending Manual Validation (default for Compliance Officer)
│   ├── My Assigned Validations
│   └── All Validations (Head of Compliance only)
├── 📋 CTR Review Queue
│   ├── My Assigned CTRs (Compliance Officer)
│   ├── All CTRs (Head of Compliance)
│   ├── Filter by Status
│   │   ├── Pending Review
│   │   ├── Flagged for Escalation
│   │   ├── Escalated
│   │   ├── Archived
│   │   └── Under Monitoring
│   └── Overdue CTRs (>10 days)
├── 🚩 Escalation Queue (Head of Compliance only)
│   ├── Pending Approval
│   ├── Approved Escalations
│   └── Rejected Escalations
├── 👥 Workload Management (Head of Compliance only)
│   ├── Assign/Reassign CTRs
│   
├── 🚨 Compliance Alerts
│   ├── Active Alerts (High/Critical priority)
│   ├── Alert by Rule Type
│   └── Alert Performance Metrics
└── 📊 Compliance Dashboards
    ├── CTR Processing Metrics
    ├── Escalation Rate Trends
    ├── Validation Quality Metrics
    └── Reporting Entity Performance

Navigation Behavior:
Compliance Officer: Default landing = "My Assigned Validations" (if pending) OR "My Assigned CTRs"
Head of Compliance: Default landing = "Workload Management" dashboard
Badge notifications:
Overdue items count (red badge)
Pending escalation approvals (amber badge)
Active high/critical alerts (red badge)
Breadcrumb Examples:
Compliance Workspace > Validation Queue > FIA-2026-0123 > Validate
Compliance Workspace > CTR Review > FIA-2026-0156 > Review
Compliance Workspace > Escalation Queue > FIA-2026-0178 > Approve Escalation


2.3 Analysis Workspace
Target Users: Analyst, Head of Analysis
🔍 Analysis Workspace
├── 📥 Analysis Queue
│   ├── My Assigned Reports (Analyst default)
│   │   ├── STRs
│   │   ├── Escalated CTRs
│   │   └── Mixed view (default)
│   ├── All Reports (Head of Analysis)
│   ├── Filter by Report Type
│   │   ├── STR only
│   │   ├── Escalated CTR only
│   │   └── Both (default)
│   ├── Filter by Status
│   │   ├── Analyze (in progress)
│   │   ├── Pending Approval
│   │   ├── Approved
│   │   └── Returned for revision
│   └── Overdue Reports (>7 days in Analyze)
├── 📂 My Cases (Analyst)
│   ├── Open Cases
│   ├── Cases Pending Approval
│   ├── Approved Cases
│   └── Closed Cases
├── 👥 Workload Management (Head of Analysis only)
│   ├── Assign/Reassign Reports
│   ├── Case Assignment
│   
├── 🔍 Subject Profiles
│   ├── Search Subjects
│   ├── High-Frequency Subjects (3+ reports in 6mo)
│   ├── PEP Subjects
│   └── Recently Updated Profiles
├── 🚨 Analysis Alerts
│   ├── Active Alerts (STR + Escalated CTR)
│   ├── Alert by Risk Level
│   │   ├── Critical
│   │   ├── High
│   │   ├── Medium
│   │   └── Low
│   └── Alert Performance Metrics
└── 📊 Analysis Dashboards
    ├── STR vs Escalated CTR Volumes
    ├── Case Opening Rate Trends
    ├── Analysis Processing Time
    └── Intelligence Production Metrics

Navigation Behavior:
Analyst: Default landing = "My Assigned Reports" (sorted by priority: Critical alerts → High alerts → oldest first)
Head of Analysis: Default landing = "Workload Management" dashboard
Badge notifications:
Overdue reports (red badge)
Pending case approvals (amber badge)
Critical/high alerts (red badge)
New escalated CTRs (blue badge)
Breadcrumb Examples:
Analysis Workspace > My Assigned Reports > FIA-2026-0234 (STR) > Analyze
Analysis Workspace > My Assigned Reports > FIA-2026-0189 (Escalated CTR) > Analyze
Analysis Workspace > My Cases > CASE-2026-0045 > Intelligence Draft
Analysis Workspace > Subject Profiles > John Mensah > View Profile


2.4 Case & Intelligence Workspace
Target Users: Analyst (case owner), Head of Analysis, Director Ops, OIC
📁 Case & Intelligence
├── 📂 Case Management
│   ├── All Cases (filtered by role)
│   │   ├── My Cases (Analyst)
│   │   ├── All Active Cases (Head of Analysis, Director Ops)
│   │   └── All Cases (OIC)
│   ├── Filter by Status
│   │   ├── Open
│   │   ├── Under Investigation
│   │   ├── Pending Intelligence Approval
│   │   ├── Pending Dissemination (OIC only)
│   │   ├── Disseminated
│   │   └── Closed
│   ├── Filter by Age
│   │   ├── 0-30 days
│   │   ├── 31-60 days
│   │   └── >60 days (overdue)
│   └── Search Cases
├── 📝 Intelligence Production
│   ├── Draft Intelligence Reports (Analyst)
│   ├── Pending Approval (Head of Analysis)
│   ├── Approved for Dissemination (OIC queue)
│   └── Intelligence Templates
│       ├── Tactical Intelligence Report
│       ├── Strategic Assessment
│       ├── Subject Profile
│       └── Typology Analysis
├── 📤 Dissemination (OIC only)
│   ├── Pending Dissemination
│   ├── Disseminated Intelligence
│   │   ├── By recipient (LEA, CBL, etc.)
│   │   ├── By date
│   │   └── By case type
│   ├── Dissemination Log
│   └── Recipient Feedback Tracking
└── 📊 Case Metrics
    ├── Case Opening Rate
    ├── Case Resolution Time
    ├── Intelligence Production Volume
    └── Dissemination Statistics

Navigation Behavior:
Analyst: Default landing = "My Cases" → "Open" status
Head of Analysis: Default landing = "Pending Approval" (if any) OR "All Active Cases"
OIC: Default landing = "Pending Dissemination" (if any) OR "Disseminated Intelligence"
Badge notifications:
Pending approvals (Head of Analysis, amber)
Pending dissemination (OIC, red)
Overdue cases >30 days (red)
Breadcrumb Examples:
Case & Intelligence > Case Management > CASE-2026-0045 > Case Details
Case & Intelligence > Intelligence Production > CASE-2026-0045 > Draft Tactical Report
Case & Intelligence > Dissemination > DISS-2026-0012 > Disseminate to LEA


2.5 Rules Management Workspace
Target Users: Head of Compliance (Compliance rules), Head of Analysis (Analysis rules)
⚙️ Rules Management
├── 📋 Compliance Rules (Head of Compliance only)
│   ├── Active Rules
│   ├── Inactive Rules
│   ├── Create New Rule
│   ├── Pre-Configured Rules (10 baseline)
│   └── Rule Performance Metrics
│       ├── Alert volume by rule
│       ├── True positive rate
│       └── False positive rate
├── 📋 Analysis Rules (Head of Analysis only)
│   ├── Active Rules
│   ├── Inactive Rules
│   ├── Create New Rule
│   ├── Pre-Configured Rules
│   └── Rule Performance Metrics
├── 🔍 Rule Testing Sandbox
│   ├── Test rule against historical data
│   └── Preview alert volume
└── 📊 Combined Rule Performance (Both heads can view, and Director Ops)
    ├── Alert distribution (Compliance vs Analysis)
    ├── Escalation correlation with alerts
    └── Case opening correlation with alerts

Navigation Behavior:
Head of Compliance: Can ONLY access "Compliance Rules" section
Head of Analysis: Can ONLY access "Analysis Rules" section
Both: Can view "Combined Rule Performance" (read-only)
Domain separation enforced per PRD AC-6.4, Test Case 6.8
Attempting to access other domain → 403 error: "You do not have permission to manage [Compliance/Analysis] rules. Contact [Head of Compliance/Analysis]."
Breadcrumb Examples:
Rules Management > Compliance Rules > Active Rules
Rules Management > Compliance Rules > Edit Rule: "Structuring Pattern Detection"
Rules Management > Analysis Rules > Create New Rule


2.6 Audit & Oversight Workspace
Target Users: Director Ops, OIC, Head of Compliance, Head of Analysis
🔍 Audit & Oversight
├── 📜 Audit Logs
│   ├── Search Audit Events
│   │   ├── By object (Report, Case, Intelligence, Dissemination)
│   │   ├── By actor (User)
│   │   ├── By action type (StageTransition, Decision, Export, etc.)
│   │   ├── By date range
│   │   └── By break-glass sessions
│   ├── Report Lifecycle Audit Trail
│   │   └── Complete history: Submission → Dissemination
│   ├── Case Audit Trail
│   ├── Dissemination Audit Trail (OIC only)
│   └── Export Audit Trail
│       ├── Data exports
│       ├── Report exports
│       └── Intelligence exports
├── 🔐 Break-Glass Access Logs (OIC only)
│   ├── Active Sessions
│   ├── Past Sessions
│   ├── Pending Requests (for approval)
│   └── Access Justifications
├── 📊 System Performance Metrics
│   ├── Processing Time Trends
│   │   ├── Submission → Validation (target: 10s)
│   │   ├── Validation → Compliance Review (CTR)
│   │   ├── Validation → Analysis (STR)
│   │   └── Submission → Dissemination (target: 18 days)
│   ├── Workload Distribution
│   │   ├── Compliance Officers
│   │   ├── Analysts
│   │   └── Bottleneck identification
│   ├── System Health
│   │   ├── Uptime (target: 99%)
│   │   ├── API response times
│   │   └── Database performance
│   └── User Activity Metrics
├── 📈 Executive Dashboards
│   ├── Director Ops Dashboard
│   │   ├── Compliance + Analysis unified view
│   │   ├── Escalation flow visualization
│   │   ├── Bottleneck alerts
│   │   └── Resource allocation recommendations
│   ├── OIC Dashboard
│   │   ├── Pending dissemination queue
│   │   ├── Intelligence production summary
│   │   ├── Law enforcement feedback tracking
│   │   └── Strategic intelligence gaps
│   └── Compliance Reports (FATF, CBL)
│       ├── Monthly statistical reports
│       ├── Quarterly compliance reports
│       └── Annual typology analysis
└── 🚨 System Alerts
    ├── Overdue reports (>18 day target)
    ├── Stale cases (>30 days)
    ├── Security events
    └── Data quality issues

Navigation Behavior:
Director Ops: Default landing = "Executive Dashboards" → "Director Ops Dashboard"
OIC: Default landing = "Executive Dashboards" → "OIC Dashboard"
Head of Compliance/Analysis: Default landing = "System Performance Metrics" (filtered to their domain)
Badge notifications:
Break-glass pending approvals (OIC only, red)
Critical system alerts (all, red)
Overdue reports/cases (amber)
Breadcrumb Examples:
Audit & Oversight > Audit Logs > Report Lifecycle > FIA-2026-0123
Audit & Oversight > Break-Glass Access Logs > Session: SESS-2026-001
Audit & Oversight > Executive Dashboards > Director Ops Dashboard


2.7 Administration Workspace
Target Users: Tech Admin, OIC (oversight)
⚙️ Administration
├── 👥 User Management
│   ├── All Users
│   ├── Create User
│   ├── Manage Roles
│   │   ├── Reporting Entity User
│   │   ├── Compliance Officer
│   │   ├── Head of Compliance
│   │   ├── Analyst
│   │   ├── Head of Analysis
│   │   ├── Director of Operations
│   │   ├── OIC
│   │   └── Tech Admin
│   ├── Deactivate/Reactivate Users
│   └── Password Reset Requests
├── 🏢 Reporting Entity Management
│   ├── All Reporting Entities (46+ currently active)
│   ├── Register New Entity
│   ├── API Credentials Management
│   │   ├── Issue credentials
│   │   ├── Revoke credentials
│   │   └── Regenerate credentials
│   ├── Entity Performance Metrics
│   └── Submission Quality Reports
├── 🔐 Security Settings
│   ├── Session Timeout Configuration (default: 30 min)
│   ├── Password Policy
│   ├── Failed Login Lockout Settings (default: 5 attempts)
│   ├── Re-Authentication Settings
│   │   └── Sensitive actions requiring re-auth
│   └── IP Whitelisting (optional)
├── 🔧 System Configuration
│   ├── Workflow Stage Thresholds
│   │   ├── Overdue CTR threshold (default: 10 days)
│   │   ├── Overdue STR threshold (default: 7 days)
│   │   └── Overdue case threshold (default: 30 days)
│   ├── Validation Rules Configuration
│   │   ├── Deduplication settings
│   │   ├── File size limits (default: 25MB per PTD)
│   │   └── goAML schema version (locked: 5.0.1)
│   ├── Notification Settings
│   │   ├── Email templates
│   │   └── Notification frequency
│   └── Rate Limiting (API)
│       └── Per-entity submission limits
├── 💾 Backup & Recovery (Tech Admin only)
│   ├── Manual Backup Trigger
│   ├── Restore from Backup
│   ├── Backup Schedule Configuration
│   └── Backup Verification Logs
├── 🔍 System Logs (Tech Admin only)
│   ├── Application Logs
│   ├── Error Logs
│   ├── Security Event Logs
│   └── Performance Logs
└── 📊 System Health Monitoring (Tech Admin only)
    ├── Server Metrics (CPU, RAM, Disk)
    ├── Database Performance
    ├── API Health
    └── Uptime Statistics

Navigation Behavior:
Tech Admin: Default landing = "System Health Monitoring"
OIC: Limited view = "User Management" + "Reporting Entity Management" only (oversight, no direct edits without Tech Admin execution)
Break-glass content access: NOT available here (requires explicit OIC authorization per session in Audit & Oversight)
Badge notifications:
Failed system health checks (red)
Pending password reset requests (blue)
Critical Access Restriction:
Tech Admin CANNOT access report/case/intelligence content through Administration workspace
Content access requires break-glass authorization (tracked in Audit & Oversight)
Breadcrumb Examples:
Administration > User Management > Create User
Administration > Reporting Entity Management > Bank of Monrovia > API Credentials
Administration > System Configuration > Workflow Stage Thresholds


3. Global Navigation Components
SECTION 3: Global Navigation Components (REVISED)
3.1 Primary Navigation Structure (COMPLETELY REPLACED)
OLD (Delete Entirely):
Workspace dropdown menu
Top navigation with workspace switcher
Side navigation alternative
NEW Architecture:
┌────────────────────────────────────────────────────────────────┐
│                    TOP BAR (Fixed, 64px height)                │
│  [Logo + Name]        [Global Search]         [Bell] [Avatar]  │
└────────────────────────────────────────────────────────────────┘
┌──────────────┬─────────────────────────────────────────────────┐
│              │                 MAIN CONTENT AREA               │
│   SIDEBAR    │  ┌───────────────────────────────────────────┐  │
│   (Fixed     │  │ BREADCRUMBS (48px height)                 │  │
│   240px      │  └───────────────────────────────────────────┘  │
│   or 64px)   │  ┌───────────────────────────────────────────┐  │
│              │  │                                           │  │
│              │  │  PAGE CONTENT                             │  │
│              │  │                                           │  │
│              │  │                                           │  │
└──────────────┴──└───────────────────────────────────────────┘──┘

3.2 Top Navigation Bar Specification
Component Breakdown:
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│  [A]        [B]                      [C]           [D]    [E]  │
│                                                                │
└────────────────────────────────────────────────────────────────┘

[A] = Logo (40x40px) + "FIA SupTech365" text
[B] = Spacer (flexible)
[C] = Global Search (max-width: 600px, flex: 1)
[D] = Notifications Bell (40x40px clickable area)
[E] = User Avatar (40x40px) with dropdown
Measurements:
Total height: 64px
Horizontal padding: 24px left/right
Vertical padding: 12px top/bottom
Gap between elements: 16px
Visual Spec:
┌─[24px]─┬────────┬─[16px]─┬──────────────────────┬─[16px]─┬────┬─[16px]─┬────┬─[24px]─┐
│        │  Logo  │        │                      │        │ 🔔 │        │ 👤 │        │
│        │  +Name │        │   Search Input       │        │    │        │    │        │
│        │        │        │   (flexible width)   │        │    │        │    │        │
└────────┴────────┴────────┴──────────────────────┴────────┴────┴────────┴────┴────────┘
         ↑ 120px ↑          ↑                     ↑        ↑40px↑        ↑40px↑
Component A - Logo Section:
┌──────────────────────────┐
│  [Logo]  FIA SupTech365  │
│   40px   18px/600 weight │
└──────────────────────────┘

Clickable area: Full section
Click behavior: Navigate to user's default landing page
Hover: Slight opacity change (0.9)
Component C - Global Search:
┌─────────────────────────────────────────────────┐
│  🔍  Search reports, subjects, cases...         │
└─────────────────────────────────────────────────┘

Height: 40px
Border: 1px solid #E2E8F0
Border-radius: 8px
Background: #F8FAFC (gray-50)
Padding: 0 12px
Icon: 20x20px, left-aligned
Text: 14px, placeholder color #94A3B8

Focus state:
- Border: 2px solid #1E3A8A (primary-blue)
- Background: white
- Box-shadow: 0 0 0 3px rgba(30, 58, 138, 0.1)

Keyboard shortcut indicator: "Ctrl+K" in gray on far right
Component D - Notifications Bell:
┌────────┐
│   🔔   │  ← Badge (if count > 0)
│        │     Position: top-right
└────────┘     Size: 18x18px
  40x40px      Background: #EF4444 (red)
               Text: white, 11px, bold
               Border: 2px solid white

Click: Opens slide-out panel from right
Hover: Background #F1F5F9
Active: Background #E2E8F0
Component E - User Avatar:
┌─────────────────────┐
│  👤  John Doe    ▼  │
│  40px  14px     12px│
└─────────────────────┘

Desktop (≥1024px): Shows avatar + name + chevron
Tablet (768-1024px): Shows avatar + chevron only
Mobile (<768px): Shows avatar only

Dropdown menu (opens below, right-aligned):
┌────────────────────────────┐
│  [Avatar] John Doe         │
│  Compliance Officer        │
│  ──────────────────────    │
│  ⚙️ My Profile             │
│  🔐 Change Password        │
│  🌙 Dark Mode         [◯]  │
│  📚 Help Documentation     │
│  💬 Submit Feedback        │
│  🚪 Logout                 │
└────────────────────────────┘

Width: 240px
Padding: 8px
Border: 1px solid #E2E8F0
Border-radius: 8px
Box-shadow: 0 4px 6px rgba(0,0,0,0.1)

3.3 Sidebar Navigation Specification
Expanded State (240px):
┌──────────────────────────┐
│                          │
│  MY WORK                 │ ← Section Header
│  📥 Validation Queue  [3]│ ← Nav Item + Badge
│  📋 CTR Review       [12]│
│  🚨 Alerts            [5]│
│                          │
│  MY ACTIVITY             │
│  🕐 Recent Reports       │
│  🚩 Flagged CTRs         │
│                          │
│  ──────────────────────  │ ← Divider
│  💬 Help & Support       │
│                          │
│  [≡] Collapse         ↓  │ ← Toggle at bottom
└──────────────────────────┘
Collapsed State (64px):
┌────┐
│    │
│ 📥 │ ← Icon only
│ 📋 │   (Tooltip on hover)
│ 🚨 │
│    │
│ 🕐 │
│ 🚩 │
│    │
│ ━━ │ ← Thin divider
│ 💬 │
│    │
│ [≡]│ ← Toggle
└────┘
Measurements:
Sidebar Height: calc(100vh - 64px)  /* Full height minus top nav */
Sidebar Width (expanded): 240px
Sidebar Width (collapsed): 64px
Transition: width 200ms ease-out

Position: Fixed
Left: 0
Top: 64px (below top nav)
Z-index: 50

Scroll: Auto (if content overflows)
Background: white
Border-right: 1px solid #E2E8F0
Section Header Spec:
Padding: 8px 16px
Font-size: 12px
Font-weight: 600
Color: #64748B (gray-500)
Text-transform: uppercase
Letter-spacing: 0.5px
Line-height: 16px

When collapsed: Hidden
Navigation Item Spec:
┌──────────────────────────────────────┐
│  [Icon]  Label Text              [#] │
│  20x20   14px/400               Badge│
└──────────────────────────────────────┘

Structure:
- Display: flex
- Align-items: center
- Gap: 12px
- Padding: 10px 16px
- Margin: 2px 8px
- Border-radius: 6px

Default state:
- Background: transparent
- Color: #475569 (gray-600)

Hover state:
- Background: #F1F5F9 (gray-100)
- Color: #0F172A (gray-900)
- Cursor: pointer

Active state (current page):
- Background: #1E3A8A (primary-blue)
- Color: white
- Font-weight: 500

Icon:
- Size: 20x20px
- Stroke-width: 2px (Lucide default)
- Color: inherit from parent

Label:
- Font-size: 14px
- Font-weight: 400 (500 when active)
- White-space: nowrap
- Overflow: hidden
- Text-overflow: ellipsis

Badge (if present):
- Position: margin-left auto
- Min-width: 20px
- Height: 20px
- Padding: 2px 6px
- Border-radius: 10px (pill shape)
- Font-size: 11px
- Font-weight: 600
- Text-align: center
Badge Variants:
Info (Blue):
  Background: #3B82F6
  Color: white

Warning (Amber):
  Background: #F59E0B
  Color: white

Critical (Red):
  Background: #DC2626
  Color: white
  Animation: pulse 2s infinite

When parent is active:
  Background: white
  Color: #1E3A8A (primary-blue)
Divider Spec:
Height: 1px
Background: #E2E8F0 (gray-200)
Margin: 8px 16px
Toggle Button Spec:
┌──────────────────────────┐
│  [≡] Collapse         ↓  │  ← Expanded
└──────────────────────────┘

┌────┐
│ [≡]│  ← Collapsed
└────┘

Position: Sticky at bottom
Border-top: 1px solid #E2E8F0
Padding: 12px
Display: flex
Align-items: center
Justify-content: center (when collapsed)
Justify-content: space-between (when expanded)
Gap: 8px
Cursor: pointer
Background: white

Hover:
  Background: #F1F5F9

Icon: Menu (≡) 20x20px
Label: "Collapse" or "Expand" (14px)
Chevron: Down (when expanded) / Right (when collapsed)
Nested Items (Accordion):
Parent item with children:
┌──────────────────────────┐
│  👥 Team Management   ▼  │ ← Expandable
└──────────────────────────┘

When expanded:
┌──────────────────────────┐
│  👥 Team Management   ▲  │
│    • Workload View       │ ← Indented child
│    • Assign Reports      │
│    • Performance         │
└──────────────────────────┘

Chevron:
- Down (▼) when collapsed
- Up (▲) when expanded
- Rotates 180deg on toggle

Child items:
- Padding-left: 48px (to align with parent text)
- Bullet: "•" or small dot before text
- Same height/padding as parent items
- Slightly smaller font (13px vs 14px)

3.4 Breadcrumb Navigation (UPDATED)
OLD Format (Delete):
❌ Workspace Name > Object Type > Object ID > Current Action
NEW Format:
✅ Section > Object Type > Object ID > Current Action
OR
✅ Object ID > Current Action  (simplified)
Visual Specification:
┌────────────────────────────────────────────────────────────────┐
│  [Icon] Section > Object Type > FIA-2026-0123 > Action        │
│   20px   14px  >   14px      >     14px       >  14px/500     │
└────────────────────────────────────────────────────────────────┘

Container:
- Background: #F8FAFC (gray-50)
- Border-bottom: 1px solid #E2E8F0
- Padding: 12px 24px
- Height: 48px
- Display: flex
- Align-items: center
- Gap: 8px

Segments:
- Display: inline-flex
- Align-items: center
- Gap: 8px
- Color: #64748B (gray-600)

Separator (>):
- Color: #CBD5E1 (gray-300)
- Font-size: 14px
- Margin: 0 8px

Links (clickable segments):
- Color: #1E3A8A (primary-blue)
- Text-decoration: none
- Cursor: pointer
- Hover: underline

Current page (last segment):
- Color: #0F172A (gray-900)
- Font-weight: 500
- Not clickable
Examples with Measurements:
Compliance Officer View:
┌────────────────────────────────────────────────────────────┐
│  📥 Validation > FIA-2026-0123 > Validate Report           │
│  20px  14px   >     14px       >    14px/500               │
└────────────────────────────────────────────────────────────┘

Analyst View:
┌────────────────────────────────────────────────────────────┐
│  📁 My Cases > CASE-2026-0045 > Intelligence Draft         │
└────────────────────────────────────────────────────────────┘

Simplified (Object Detail):
┌────────────────────────────────────────────────────────────┐
│  FIA-2026-0123 > Compliance Review                         │
└────────────────────────────────────────────────────────────┘
Mobile Truncation (<768px):
Full breadcrumb (desktop):
📥 Validation > Reports > FIA-2026-0123 > Validate

Mobile truncated:
... > FIA-2026-0123 > Validate

Tap "..." to expand:
┌──────────────────────────┐
│  Full Path:              │
│  📥 Validation >         │
│  Reports >               │
│  FIA-2026-0123 >         │
│  Validate                │
└──────────────────────────┘

3.5 Contextual Actions Bar (NO CHANGES)
Keep existing specification from original document.

3.6 Status Indicators (NO CHANGES)
Keep existing specification from original document.

3.7 Badge Notifications (UPDATED PLACEMENT)
OLD: On workspace dropdown items NEW: On sidebar navigation items
Visual Specification (already covered in 3.3):
Position on navigation item:
┌───────────────────────────────────┐
│  📥 Validation Queue          [3] │
│                         ↑         │
│                    Badge (right)  │
└───────────────────────────────────┘

Badge sizes:
- Single digit (1-9): 20px width
- Double digit (10-99): 26px width
- Triple+ (99+): 32px width, shows "99+"

Positioning:
- Margin-left: auto
- Flex-shrink: 0


4. Search & Filter Patterns
4.1 Global Search (Top Navigation)
Location: Top-right navigation bar, all workspaces
Scope: Role-dependent
Reporting Entity User: Own submissions only
Compliance Officers: CTRs + validations in their scope
Analysts: STRs + Escalated CTRs assigned/accessible
Heads/Directors/OIC: Broader scope per permissions
Search Box:
┌─────────────────────────────────────────┐
│  🔍  Search reports, subjects, cases... │
└─────────────────────────────────────────┘

Quick Results Dropdown (as-you-type):
─────────────────────────────────────
  Reports:
    📄 FIA-2026-0123 (STR) - Under Review
    📄 FIA-2026-0156 (CTR) - Compliance Review
    
  Subjects:
    👤 John Mensah (4 reports)
    👤 ABC Trading Ltd (2 reports)
    
  Cases:
    📁 CASE-2026-0045 - Open
    
  [View all results →]

Advanced Search Link:
Advanced Search → Opens dedicated search page with filters:
  - Object type (Report/Subject/Case)
  - Date range
  - Report type (STR/CTR/Escalated)
  - Status
  - Entity
  - Amount range
  - Keywords


4.2 Page-Level Filters (List Views)
Location: Above list/table, below page header
Standard Filter Bar:
┌──────────────────────────────────────────────────────────────┐
│  Filters:  [Status ▼] [Report Type ▼] [Date Range ▼] [Clear] │
│  Search:   [                                        ] [🔍]   │
└──────────────────────────────────────────────────────────────┘

Multi-Select Dropdown Example (Status):
Status ▼
───────────────────
☑ Submitted
☐ Validated
☑ Under Review
☐ Rejected
☐ Returned
☐ Archived
───────────────────
[Apply] [Clear]

Active Filters Display:
Active Filters: [Status: Submitted, Under Review ×] [Date: Last 30 days ×]
                [Clear all filters]


4.3 Sort Controls (Tables)
Location: Table headers
Sortable Columns:
Reference Number
Submission Date
Report Type
Current Stage
Entity
Amount
Age (days since submission/assignment)
Visual Indicator:
Reference Number ↑   (ascending)
Submission Date  ↓   (descending)
Report Type      ↕   (sortable, not active)

Default Sort:
Validation queues: Oldest first (submission date ascending)
Alert lists: Highest risk first (Critical → High → Medium → Low)
Case lists: Most recent first (opened date descending)

SECTION 5: Responsive Navigation Behavior 
5.1 Mobile Navigation (<768px)
Layout Structure:
┌────────────────────────────────────┐
│ ☰  FIA SupTech365         [🔔][👤]│ ← Top nav (64px)
└────────────────────────────────────┘
│                                    │
│                                    │
│  [Main Content - Full Width]      │
│                                    │
│                                    │
└────────────────────────────────────┘

No visible sidebar - Hidden behind hamburger
Hamburger Menu Button:
┌────┐
│ ☰  │  40x40px clickable area
└────┘  Position: Left side of top nav
        Padding: 8px
        
Icon (☰):
  Size: 24x24px
  Color: #0F172A (gray-900)
  Stroke-width: 2px
  
Tap target: 44x44px minimum (accessibility)
Slide-Out Navigation Panel:
Triggered by: Tap hamburger or swipe from left edge
Animation: Slide in from left, 250ms ease-out
Overlay: Semi-transparent black (rgba(0,0,0,0.5))

┌─────────────────────────────────┐  ┊ Overlay (dismisses on tap)
│                                 │  ┊
│  MY WORK                        │  ┊
│  📥 Validation Queue        [3] │  ┊
│  📋 CTR Review             [12] │  ┊
│  🚨 Alerts                  [5] │  ┊
│                                 │  ┊
│  MY ACTIVITY                    │  ┊
│  🕐 Recent Reports              │  ┊
│  🚩 Flagged CTRs                │  ┊
│                                 │  ┊
│  DASHBOARDS                     │  ┊
│  📈 My Performance              │  ┊
│  📊 Compliance Metrics          │  ┊
│                                 │  ┊
│  🔍 Search                      │  ┊
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │  ┊
│  💬 Help                        │  ┊
│                                 │  ┊
│  ─────────────────────────────  │  ┊
│  [👤] John Doe                  │  ┊
│  Compliance Officer             │  ┊
│  ⚙️ Settings                    │  ┊
│  🚪 Logout                      │  ┊
│                                 │  ┊
└─────────────────────────────────┘  ┊

Panel specs:
- Width: 280px (80% of viewport, max 320px)
- Height: 100vh
- Background: white
- Box-shadow: 4px 0 8px rgba(0,0,0,0.1)
- Z-index: 200
- Padding: 16px
- Scroll: auto (if content overflows)

Close triggers:
1. Tap overlay
2. Tap any navigation link (navigates + closes)
3. Swipe left on panel
4. Tap [×] button at top
Mobile Top Navigation Adjustments:
┌────────────────────────────────────┐
│☰ FIA                      🔔    👤 │
│   Shortened name          Only    │
│   on mobile              icons    │
└────────────────────────────────────┘

Logo: 32x32px (reduced from 40px)
App name: Shortened to "FIA" only
Search: Hidden (access via dedicated search page)
Notifications: Icon only, no label
User: Avatar only, no name
Mobile Breadcrumb:
Desktop breadcrumb:
📥 Validation > Reports > FIA-2026-0123 > Validate

Mobile breadcrumb (simplified):
← Back    FIA-2026-0123 • Validate

Layout:
┌────────────────────────────────────┐
│  ← Back    FIA-2026-0123 • Validate│
│  44x44     14px/500      14px      │
└────────────────────────────────────┘

Back button:
- Size: 44x44px tap target
- Icon: ChevronLeft, 20x20px
- Position: Left edge
- Tap: Navigate to previous page

Text:
- Font-size: 14px
- Truncate with ellipsis if too long
- Separator: • (bullet point)
Mobile Actions Bar:
Primary action → Floating Action Button (FAB)

┌────────────────────────────────┐
│                                │
│  [Content]                     │
│                                │
│                           ┌───┐│
│                           │ ✓ ││ ← FAB
│                           └───┘│
└────────────────────────────────┘
                             60x60px
                             Border-radius: 30px
                             Position: fixed
                             Bottom: 16px
                             Right: 16px
                             Box-shadow: 0 4px 12px rgba(0,0,0,0.15)

Secondary actions → Bottom sheet
Triggered by: Tap "⋮ More" button

┌────────────────────────────────┐
│  [Content]                     │
│                                │
└────────────────────────────────┘
┌────────────────────────────────┐ ← Slides up from bottom
│  ━━━━━━  Handle                │
│                                │
│  Actions                       │
│  📋 Accept                     │
│  ↩️ Return for Correction      │
│  ❌ Reject                     │
│  🚩 Flag for Escalation        │
│                                │
│  [Cancel]                      │
└────────────────────────────────┘

5.2 Tablet Navigation (768-1024px)
Layout Options:
Option A: Collapsed Sidebar (Recommended)
┌───┬────────────────────────────────────────────────────────┐
│   │  [Logo] FIA        🔍 Search...         [🔔] [👤]     │
├───┼────────────────────────────────────────────────────────┤
│   │  Breadcrumbs                                           │
│ 📥│  ─────────────────────────────────────────────────────  │
│ 📋│                                                         │
│ 🚨│  [Main Content - Expands to fill space]                │
│ 🕐│                                                         │
│ 🚩│                                                         │
│   │                                                         │
│ ━━│                                                         │
│ 💬│                                                         │
│   │                                                         │
│[≡]│                                                         │
└───┴────────────────────────────────────────────────────────┘
 64px ← Collapsed sidebar (icon-only)
Sidebar Behavior on Tablet:
Default state: Collapsed (64px, icon-only)

Hover over icon: Temporary tooltip appears
┌────┐     ┌──────────────────┐
│ 📥 │ →   │ Validation Queue │
└────┘     └──────────────────┘

Click toggle ([≡]): Pin expanded state
┌───┐                 ┌──────────────────────────┐
│[≡]│  Click  →      │  MY WORK                 │
└───┘                 │  📥 Validation Queue  [3]│
                      │  📋 CTR Review       [12]│
                      │  ...                     │
                      │  [≡] Collapse            │
                      └──────────────────────────┘
                       240px ← Expanded sidebar
                       
Pinned state persists in localStorage
Collapsed Sidebar Item Spec:
┌────┐
│ 📥 │  Icon centered
│    │  Badge as small dot (8x8px)
└────┘   if count > 0

Measurements:
- Width: 64px
- Item height: 48px
- Icon: 20x20px, centered
- Padding: 14px (to center icon)

Badge dot position:
  Top-right corner of icon
  Size: 8x8px
  Background: Color based on variant
  Border: 2px solid white
Option B: Full Hamburger (Alternative)
┌────────────────────────────────────────────────────────────┐
│ ☰ FIA SupTech365      🔍 Search...         [🔔] [👤]      │
└────────────────────────────────────────────────────────────┘
│                                                            │
│  [Content fills full width]                                │
│                                                            │
└────────────────────────────────────────────────────────────┘

Same slide-out behavior as mobile, but wider panel (320px)

5.3 Desktop Navigation (≥1024px)
Full Layout:
┌────────────────────────────────────────────────────────────────┐
│  [Logo] FIA SupTech365        🔍 Search...        [🔔] [👤]   │ 64px
├──────────────┬─────────────────────────────────────────────────┤
│              │  Breadcrumbs                                    │ 48px
│  SIDEBAR     ├─────────────────────────────────────────────────┤
│  240px       │                                                 │
│              │                                                 │
│  MY WORK     │  MAIN CONTENT AREA                             │
│  📥 Val [3]  │                                                 │
│  📋 CTR [12] │  (Responsive to available space)               │
│  🚨 Ale  [5] │                                                 │
│              │                                                 │
│  DASHBOARDS  │                                                 │
│  📈 Perf     │                                                 │
│              │                                                 │
│  [≡] Expand  │                                                 │
└──────────────┴─────────────────────────────────────────────────┘
Content Area Width Calculation:
Sidebar expanded (240px):
  Content width = viewport width - 240px - 48px (padding)

Sidebar collapsed (64px):
  Content width = viewport width - 64px - 48px (padding)

Maximum content width: 1440px (centered if viewport wider)
Sidebar States:
State 1: Expanded (default on desktop)
┌──────────────────────────┐
│  MY WORK                 │
│  📥 Validation Queue  [3]│
│  📋 CTR Review       [12]│
│  🚨 Alerts            [5]│
│  ...                     │
│  [≡] Collapse         ←  │
└──────────────────────────┘
240px width

State 2: Collapsed (user preference)
┌────┐
│ 📥 │ ← Tooltip on hover
│ 📋 │
│ 🚨 │
│ ... │
│[≡] │
└────┘
64px width

Transition: 200ms ease-out on width property
Hover Behavior (Collapsed Sidebar):
Before hover:
┌────┐
│ 📥 │
└────┘

On hover:
┌────┬──────────────────┐
│ 📥 │ Validation Queue │ ← Tooltip floats right
└────┴──────────────────┘

Tooltip specs:
- Background: #1E293B (gray-900)
- Color: white
- Padding: 6px 12px
- Border-radius: 6px
- Font-size: 13px
- White-space: nowrap
- Box-shadow: 0 2px 8px rgba(0,0,0,0.15)
- Arrow pointing left
- Z-index: 100
- Delay: 300ms (prevents flicker)

5.4 Responsive Breakpoint Summary
Mobile (<768px):
├─ Hamburger menu (full overlay)
├─ Top nav: Logo + Hamburger + Notifications + Avatar
├─ No visible sidebar
├─ Simplified breadcrumbs (← Back + Object)
├─ FAB for primary action
└─ Bottom sheet for secondary actions

Tablet (768-1024px):
├─ Collapsed sidebar (64px, icon-only) OR hamburger
├─ Top nav: Full (all elements visible)
├─ Hover tooltips on sidebar icons
├─ Standard breadcrumbs
└─ Normal action buttons

Desktop (≥1024px):
├─ Expanded sidebar (240px, full labels)
├─ Top nav: Full (all elements optimized)
├─ Complete breadcrumbs
├─ Collapsible sidebar (user preference)
└─ All features visible

5.5 Transition Animations
Sidebar Expand/Collapse:
css
.sidebar {
  width: 240px;
  transition: width 200ms cubic-bezier(0.4, 0.0, 0.2, 1);
}

.sidebar.collapsed {
  width: 64px;
}

/* Content area adjusts simultaneously */
.main-content {
  margin-left: 240px;
  transition: margin-left 200ms cubic-bezier(0.4, 0.0, 0.2, 1);
}

.sidebar.collapsed ~ .main-content {
  margin-left: 64px;
}
Mobile Slide-Out:
css
.mobile-nav-panel {
  transform: translateX(-100%); /* Hidden by default */
  transition: transform 250ms cubic-bezier(0.4, 0.0, 0.2, 1);
}

.mobile-nav-panel.open {
  transform: translateX(0); /* Slides in */
}

.overlay {
  opacity: 0;
  transition: opacity 250ms ease;
}

.overlay.visible {
  opacity: 1;
}
Tooltip Fade-In:
css
.tooltip {
  opacity: 0;
  transform: translateX(-8px);
  transition: opacity 150ms ease, transform 150ms ease;
  transition-delay: 300ms; /* Prevents flicker */
}

.sidebar-item:hover .tooltip {
  opacity: 1;
  transform: translateX(0);
}

6. URL Routing Structure (Canonical Object-Based)
6.1 Routing Principles
All routes must reflect canonical objects and workflow stages:
/reporting-entity - Reporting Entity Workspace
/compliance - Compliance Workspace
/analysis - Analysis Workspace
/cases - Case & Intelligence Workspace
/rules - Rules Management
/audit - Audit & Oversight
/admin - Administration
Object Detail Routes:
/reports/:reportId - Report detail (type auto-detected: STR/CTR/Escalated)
/cases/:caseId - Case detail
/subjects/:subjectId - Subject profile
/intelligence/:intelligenceId - Intelligence report
/dissemination/:disseminationId - Dissemination record
6.2 Complete Route Map
Reporting Entity Workspace
/reporting-entity
├── /submit                          # Submit new report
├── /submissions                     # My submissions list
│   ├── /:reportId                   # Submission detail
│   └── /:reportId/resubmit          # Resubmit corrected report
├── /resubmissions                   # Returned reports requiring correction
├── /statistics                      # Submission statistics dashboard
└── /templates                       # Download STR/CTR templates

Compliance Workspace
/compliance
├── /validation                      # Manual validation queue
│   ├── /pending                     # Pending validations (default)
│   ├── /assigned                    # My assigned validations
│   ├── /all                         # All validations (Head only)
│   └── /:reportId/validate          # Validate specific report
├── /ctr-review                      # CTR review queue
│   ├── /assigned                    # My assigned CTRs (default)
│   ├── /all                         # All CTRs (Head only)
│   ├── /overdue                     # Overdue CTRs (>10 days)
│   └── /:reportId/review            # Review specific CTR
├── /escalation                      # Escalation queue (Head only)
│   ├── /pending                     # Pending approval
│   ├── /approved                    # Approved escalations
│   ├── /rejected                    # Rejected escalations
│   └── /:reportId/escalate          # Escalation decision
├── /workload                        # Workload management (Head only)
│   ├── /assign                      # Assign CTRs
│   └── /dashboard                   # Team workload view
├── /alerts                          # Compliance alerts
│   ├── /active                      # Active alerts
│   └── /performance                 # Alert performance metrics
└── /dashboards                      # Compliance dashboards
    ├── /processing                  # CTR processing metrics
    ├── /escalation                  # Escalation rate trends
    └── /quality                     # Validation quality metrics

Analysis Workspace
/analysis
├── /queue                           # Analysis queue
│   ├── /assigned                    # My assigned reports (default)
│   ├── /all                         # All reports (Head only)
│   ├── /overdue                     # Overdue reports (>7 days)
│   └── /:reportId/analyze           # Analyze specific report
├── /cases                           # My cases
│   ├── /open                        # Open cases
│   ├── /pending-approval            # Cases pending approval
│   ├── /approved                    # Approved cases
│   └── /closed                      # Closed cases
├── /workload                        # Workload management (Head only)
│   ├── /assign                      # Assign reports
│   ├── /cases/assign                # Assign cases
│   └── /dashboard                   # Analyst performance
├── /subjects                        # Subject profiles
│   ├── /search                      # Search subjects
│   ├── /high-frequency              # High-frequency subjects (3+ reports)
│   ├── /pep                         # PEP subjects
│   └── /:subjectId                  # Subject profile detail
├── /alerts                          # Analysis alerts
│   ├── /active                      # Active alerts (STR + Escalated CTR)
│   ├── /critical                    # Critical risk alerts
│   └── /performance                 # Alert performance metrics
└── /dashboards                      # Analysis dashboards
    ├── /volumes                     # STR vs Escalated CTR volumes
    ├── /cases                       # Case opening rate trends
    └── /processing                  # Analysis processing time

Case & Intelligence Workspace
/cases
├── /management                      # Case management
│   ├── /my-cases                    # My cases (Analyst)
│   ├── /all                         # All cases (Head/Director/OIC)
│   ├── /overdue                     # Overdue cases (>30 days)
│   └── /:caseId                     # Case detail
│       ├── /evidence                # Evidence section
│       ├── /analysis                # Analysis section
│       ├── /documents               # Documents section
│       └── /timeline                # Timeline section
├── /intelligence                    # Intelligence production
│   ├── /drafts                      # Draft intelligence reports (Analyst)
│   ├── /pending-approval            # Pending approval (Head)
│   ├── /approved                    # Approved for dissemination (OIC)
│   └── /:intelligenceId             # Intelligence report detail
│       ├── /edit                    # Edit draft
│       └── /preview                 # Preview/PDF export
├── /dissemination                   # Dissemination (OIC only)
│   ├── /pending                     # Pending dissemination
│   ├── /disseminated                # Disseminated intelligence
│   │   ├── /by-recipient            # Filter by recipient
│   │   └── /by-date                 # Filter by date
│   ├── /log                         # Dissemination log
│   └── /:disseminationId            # Dissemination detail
└── /metrics                         # Case metrics
    ├── /opening-rate                # Case opening rate
    ├── /resolution                  # Case resolution time
    └── /production                  # Intelligence production volume

Rules Management Workspace
/rules
├── /compliance                      # Compliance rules (Head of Compliance only)
│   ├── /active                      # Active rules
│   ├── /inactive                    # Inactive rules
│   ├── /create                      # Create new rule
│   ├── /preconfigured               # Pre-configured rules
│   ├── /:ruleId/edit                # Edit rule
│   └── /performance                 # Rule performance metrics
├── /analysis                        # Analysis rules (Head of Analysis only)
│   ├── /active                      # Active rules
│   ├── /inactive                    # Inactive rules
│   ├── /create                      # Create new rule
│   ├── /preconfigured               # Pre-configured rules
│   ├── /:ruleId/edit                # Edit rule
│   └── /performance                 # Rule performance metrics
├── /sandbox                         # Rule testing sandbox
│   └── /test                        # Test rule against historical data
└── /combined-performance            # Combined rule performance (both heads)
    ├── /distribution                # Alert distribution
    └── /correlation                 # Escalation/case correlation

Audit & Oversight Workspace
/audit
├── /logs                            # Audit logs
│   ├── /search                      # Search audit events
│   ├── /report-lifecycle/:reportId  # Report lifecycle audit trail
│   ├── /case/:caseId                # Case audit trail
│   ├── /dissemination/:dissId       # Dissemination audit trail (OIC only)
│   └── /exports                     # Export audit trail
├── /break-glass                     # Break-glass access logs (OIC only)
│   ├── /active                      # Active sessions
│   ├── /past                        # Past sessions
│   ├── /pending                     # Pending requests
│   └── /:sessionId                  # Session detail
├── /performance                     # System performance metrics
│   ├── /processing-times            # Processing time trends
│   ├── /workload                    # Workload distribution
│   └── /system-health               # System health metrics
├── /dashboards                      # Executive dashboards
│   ├── /director-ops                # Director Ops dashboard
│   ├── /oic                         # OIC dashboard
│   └── /compliance-reports          # FATF/CBL compliance reports
└── /alerts                          # System alerts
    ├── /overdue                     # Overdue reports/cases
    ├── /security                    # Security events
    └── /data-quality                # Data quality issues

Administration Workspace
/admin
├── /users                           # User management
│   ├── /all                         # All users
│   ├── /create                      # Create user
│   ├── /roles                       # Manage roles
│   ├── /:userId/edit                # Edit user
│   └── /password-resets             # Password reset requests
├── /entities                        # Reporting entity management
│   ├── /all                         # All reporting entities
│   ├── /register                    # Register new entity
│   ├── /:entityId/credentials       # API credentials management
│   └── /performance                 # Entity performance metrics
├── /security                        # Security settings
│   ├── /session-timeout             # Session timeout config
│   ├── /password-policy             # Password policy
│   ├── /lockout                     # Failed login lockout settings
│   └── /reauth                      # Re-authentication settings
├── /system                          # System configuration
│   ├── /workflow-thresholds         # Workflow stage thresholds
│   ├── /validation                  # Validation rules config
│   ├── /notifications               # Notification settings
│   └── /rate-limiting               # API rate limiting
├── /backup                          # Backup & recovery (Tech Admin only)
│   ├── /trigger                     # Manual backup trigger
│   ├── /restore                     # Restore from backup
│   └── /schedule                    # Backup schedule config
├── /logs                            # System logs (Tech Admin only)
│   ├── /application                 # Application logs
│   ├── /errors                      # Error logs
│   └── /security                    # Security event logs
└── /monitoring                      # System health monitoring (Tech Admin only)
    ├── /server                      # Server metrics
    ├── /database                    # Database performance
    └── /api                         # API health

6.3 Route Authorization Rules
Route Access Matrix:
Route Pattern
Tech Admin
Compliance Officer
Head of Compliance
Analyst
Head of Analysis
Director Ops
OIC
Reporting Entity
/reporting-entity/*
❌
❌
❌
❌
❌
❌
⚠️ (oversight)
✅
/compliance/validation/*
❌*
✅ (assigned)
✅ (all)
❌
❌
✅ (oversight)
✅ (oversight)
❌
/compliance/ctr-review/*
❌*
✅ (assigned)
✅ (all)
❌
❌
✅ (oversight)
✅ (oversight)
❌
/compliance/escalation/*
❌*
❌
✅
❌
❌
⚠️ (override)
⚠️ (override)
❌
/analysis/queue/*
❌*
❌
❌
✅ (assigned)
✅ (all)
✅ (oversight)
✅ (oversight)
❌
/analysis/subjects/*
❌*
⚠️ (limited)
⚠️ (limited)
✅
✅
✅ (oversight)
✅ (oversight)
❌
/cases/*
❌*
❌
❌
✅ (assigned)
✅ (all)
✅ (oversight)
✅ (oversight)
❌
/cases/dissemination/*
❌*
❌
❌
❌
❌
❌
✅
❌
/rules/compliance/*
❌*
❌
✅
❌
❌
✅ (oversight)
✅ (oversight)
❌
/rules/analysis/*
❌*
❌
❌
❌
✅
✅ (oversight)
✅ (oversight)
❌
/audit/*
✅ (logs only)
❌
✅
❌
✅
✅
✅
❌
/audit/break-glass/*
❌
❌
❌
❌
❌
❌
✅
❌
/admin/*
✅
❌
❌
❌
❌
❌
⚠️ (oversight)
❌

❌ = No access | ✅ = Full access | ⚠️ = Limited/conditional access | * = Break-glass only
Route Guards Implementation:
// Pseudo-code for route authorization
function canAccessRoute(route: string, user: User): boolean {
  // 1. Check role-based access
  if (!hasRolePermission(route, user.role)) {
    return false;
  }
  
  // 2. Check assignment-based access (for object detail routes)
  if (isObjectDetailRoute(route)) {
    const objectId = extractObjectId(route);
    if (!isAssignedTo(objectId, user) && !hasOversightRole(user)) {
      return false;
    }
  }
  
  // 3. Check workflow stage restrictions
  if (isWorkflowActionRoute(route)) {
    const object = getObject(route);
    if (!canActAtStage(object.stage, user.role)) {
      return false;
    }
  }
  
  return true;
}


7. State Management & URL Synchronization
7.1 URL Query Parameters (Global Standards)
Filter Parameters:
?status=submitted,validated - Filter by status (comma-separated)
?reportType=str,ctr,escalated - Filter by report type
?dateFrom=2026-01-01&dateTo=2026-01-31 - Date range
?entity=bank-of-monrovia - Filter by reporting entity
?priority=critical,high - Filter by priority/risk level
Pagination Parameters:
?page=2 - Page number (1-indexed)
?limit=25 - Items per page (default: 25)
Sort Parameters:
?sort=submissionDate&order=desc - Sort field and order
Search Parameters:
?q=john+mensah - Search query
?searchIn=subjects,reports,cases - Search scope
Example URL:
/analysis/queue/assigned?reportType=escalated&priority=critical&sort=age&order=desc&page=1

7.2 Deep Linking Requirements
All object detail views MUST support direct linking:
/reports/FIA-2026-0156 - Direct link to report
/cases/CASE-2026-0045 - Direct link to case
/subjects/SUBJ-0789 - Direct link to subject profile
/intelligence/INTEL-2026-0012 - Direct link to intelligence report
State Preservation on Navigation:
Filter states persist in URL when navigating between list and detail views
Breadcrumb "back" navigation restores previous filter/sort state
Browser back/forward buttons correctly restore view state

8. Error States & Edge Cases
8.1 Permission Denied (403)
Screen Display:
┌─────────────────────────────────────────────────┐
│                                                 │
│              🔒 Access Denied                   │
│                                                 │
│   You do not have permission to access this     │
│   resource.                                     │
│                                                 │
│   Required role: [Head of Compliance]           │
│   Your role: [Compliance Officer]               │
│                                                 │
│   If you believe this is an error, please       │
│   contact your system administrator.            │
│                                                 │
│   [← Go Back]  [📧 Contact Support]            │
│                                                 │
└─────────────────────────────────────────────────┘

Navigation Behavior:
Remove unauthorized workspace from navigation menu
Gray out unauthorized actions in contextual actions bar
Show tooltip on hover: "Insufficient permissions"
8.2 Not Found (404)
Screen Display:
┌─────────────────────────────────────────────────┐
│                                                 │
│              📭 Not Found                       │
│                                                 │
│   The report, case, or resource you're          │
│   looking for doesn't exist or has been         │
│   deleted.                                      │
│                                                 │
│   Reference: [FIA-2026-9999]                    │
│                                                 │
│   [← Go Back]  [🔍 Search Instead]             │
│                                                 │
└─────────────────────────────────────────────────┘

8.3 Assignment Conflict
When user attempts to access report assigned to another user:
┌─────────────────────────────────────────────────┐
│                                                 │
│              ⚠️ Assignment Conflict             │
│                                                 │
│   Report FIA-2026-0156 is assigned to:          │
│   Jane Doe (Compliance Officer)                 │
│                                                 │
│   You cannot access reports not assigned to     │
│   you unless you have oversight permissions.    │
│                                                 │
│   [← Go Back]  [📧 Request Reassignment]       │
│                                                 │
└─────────────────────────────────────────────────┘

8.4 Workflow Stage Restriction
When action is unavailable at current stage:
┌─────────────────────────────────────────────────┐
│  CTR FIA-2026-0156                              │
│  Current Stage: ● Validated                     │
│                                                 │
│  [📋 Accept] [↩️ Return] [❌ Reject] (disabled) │
│  [🚩 Flag for Escalation] (disabled)            │
│                                                 │
│  ⚠️ This report must complete Compliance        │
│  Review before escalation is available.         │
└─────────────────────────────────────────────────┘

Tooltip on disabled button:
"Action unavailable at this stage.
Report must be in 'Compliance Review' stage."



9.3 Visual Accessibility
Color Contrast Requirements:
Text on background: Minimum 4.5:1 ratio (WCAG AA)
Large text (≥18pt): Minimum 3:1 ratio
Interactive elements: Minimum 3:1 ratio
Color-Independent Indicators:
Status dots MUST include text labels (not color alone)
Critical alerts MUST include icons + text
Charts MUST use patterns in addition to colors
Focus Indicators:
*:focus {
  outline: 2px solid var(--primary-blue);
  outline-offset: 2px;
}

button:focus,
a:focus {
  box-shadow: 0 0 0 3px rgba(0, 112, 243, 0.3);
}

9.4 Touch Target Sizes (Mobile)
Minimum touch target: 44px × 44px
/* Mobile action buttons */
@media (max-width: 768px) {
  button,
  a.button,
  input[type="checkbox"],
  input[type="radio"] {
    min-height: 44px;
    min-width: 44px;
  }
  
  /* List items */
  .list-item {
    min-height: 56px; /* Slightly larger for readability */
  }
}


10. Loading States & Progressive Disclosure
10.1 Initial Page Load
Skeleton Loading Pattern:
┌─────────────────────────────────────────────────┐
│ ⚖️ Compliance Workspace                         │
├─────────────────────────────────────────────────┤
│                                                 │
│ ████████████████ ▌                              │
│ ████████ ▌                                      │
│                                                 │
│ ████████████████████ ▌     ████████ ▌          │
│ ████████████ ▌             ████ ▌              │
│ ████████████████ ▌         ████████ ▌          │
│                                                 │
└─────────────────────────────────────────────────┘

Progressive Content Loading:
Load navigation structure (instant)
Load workspace header + filters (< 500ms)
Load list items / dashboard cards (< 1s)
Load detailed metrics / charts (< 2s)
10.2 List Loading & Pagination
Infinite Scroll Pattern (for long lists):
┌─────────────────────────────────────────────────┐
│ Showing 1-25 of 156 reports                     │
├─────────────────────────────────────────────────┤
│ Report 1                                        │
│ Report 2                                        │
│ ...                                             │
│ Report 25                                       │
│                                                 │
│ ⏳ Loading more...                              │
│                                                 │
└─────────────────────────────────────────────────┘

Pagination Pattern (for structured navigation):
┌─────────────────────────────────────────────────┐
│ Showing 26-50 of 156 reports                    │
├─────────────────────────────────────────────────┤
│ ...                                             │
├─────────────────────────────────────────────────┤
│ ← Previous  [1] [2] 3 [4] [5] ... [7]  Next →  │
└─────────────────────────────────────────────────┘

10.3 Action Feedback
Immediate Feedback:
[Button clicked] → [Loading spinner] → [Success/Error state]

Example:
[Flag for Escalation] → [⏳ Flagging...] → [✓ Flagged Successfully]

Optimistic Updates:
User clicks "Accept" → 
  UI updates immediately (report marked as Accepted) →
  API call in background →
  If API fails: Revert UI + show error toast


11. Notification System
11.1 Notification Types
Toast Notifications (Temporary):
┌─────────────────────────────────────────────┐
│ ✓ Report FIA-2026-0156 validated            │
│   [Dismiss]                                 │
└─────────────────────────────────────────────┘
Duration: 5 seconds (auto-dismiss)
Position: Top-right

Persistent Notifications (Dismissible):
┌─────────────────────────────────────────────┐
│ ⚠️ You have 3 overdue CTRs requiring review │
│   [View Queue] [Dismiss]                    │
└─────────────────────────────────────────────┘
Duration: Until dismissed
Position: Top of workspace (below header)

In-App Notifications Panel:
┌─────────────────────────────────────────────┐
│ 🔔 Notifications                        [×] │
├─────────────────────────────────────────────┤
│ ● New assignment: CTR FIA-2026-0178         │
│   2 minutes ago                             │
│                                             │
│ ● Escalation approved: CTR FIA-2026-0156    │
│   15 minutes ago                            │
│                                             │
│ ○ Case CASE-2026-0045 approved              │
│   2 hours ago                               │
│                                             │
│ [Mark all as read]                          │
└─────────────────────────────────────────────┘

11.2 Notification Triggers (PTD-Aligned) - continued
System Events:
Break-glass session approved → "Break-glass access approved for Session SESS-XXX"
Break-glass session denied → "Break-glass access denied: [Reason]"
System maintenance scheduled → "System maintenance scheduled for [Date/Time]"
Bulk assignment completed → "15 CTRs assigned successfully"
Alert Events:
New critical alert → "🚨 Critical alert triggered on Report FIA-XXX"
Alert threshold reached → "Rule 'Structuring Detection' generated 50+ alerts today"
11.3 Notification Delivery Channels
In-App (Primary):
Badge count on notification bell icon
Slide-out notification panel
Toast notifications for immediate actions
Persistent banners for critical items
Email (Configurable):
Daily digest of pending assignments
Immediate alerts for critical items
Weekly summary reports (for Heads/Directors/OIC)
Email Notification Preferences:
User Preferences > Notifications


Email Notifications:
☑ Immediate (Critical alerts only)
☐ Daily Digest (9:00 AM)
☐ Weekly Summary (Monday 9:00 AM)
☐ Never (In-app only)


Notification Types:
☑ New assignments
☑ Overdue items
☑ Escalation decisions
☐ Case approvals
☑ System alerts

11.4 Notification Grouping & Batching
Grouping Rules:
Same event type + same object → Single notification with count
"3 new CTRs assigned to you" (instead of 3 separate notifications)
Related events → Grouped notification
"Case CASE-2026-0045: Analysis approved, intelligence draft ready"
Batching Schedule:
Critical alerts: Immediate
Assignments: Immediate (or batched if >5 within 1 minute)
Status updates: Batched every 5 minutes
System notifications: Batched every 15 minutes
11.5 Notification Priority Levels
Critical (Red badge):
Break-glass approvals required
System security events
Overdue items (>2x threshold)
High (Amber badge):
New assignments
Approaching deadlines
Escalation decisions required
Medium (Blue badge):
Status updates
Case approvals
Intelligence ready for review
Low (Gray badge):
System information
Bulk operation completions
Weekly summaries

12. Cross-Workspace Navigation Patterns
12.1 Object Context Switching
Scenario: User viewing Report FIA-2026-0156 needs to check related Subject profile
Navigation Flow:
Current: /compliance/ctr-review/FIA-2026-0156
Action: Click subject name "John Mensah"
Result: /subjects/SUBJ-0789
Context: Breadcrumb shows: FIA-2026-0156 > Subject Profile > John Mensah
Return: Click FIA-2026-0156 in breadcrumb → Returns to original report

Implementation Pattern:
Object links preserve context in URL state
"Return to [Object]" button appears in header
Browser back button works as expected
12.2 Related Object Quick Access
Contextual Navigation Panel (Right Sidebar):
┌─────────────────────────────────────┐
│ Related Information                 │
├─────────────────────────────────────┤
│ 👤 Subject: John Mensah             │
│    4 reports in 6 months            │
│    [View Profile →]                 │
│                                     │
│ 📊 Reporting Entity:                │
│    Bank of Monrovia                 │
│    [View Submissions →]             │
│                                     │
│ 🚨 Alerts (2 active):               │
│    • Structuring Pattern            │
│    • High-Risk Transaction          │
│    [View Alerts →]                  │
│                                     │
│ 📁 Related Cases:                   │
│    CASE-2026-0045 (Open)            │
│    [View Case →]                    │
└─────────────────────────────────────┘

Availability:
Report detail pages (all types)
Case detail pages
Subject profile pages
Intelligence report pages

Visual Indicator:
Show shortcuts in help menu
Display on hover tooltips: "Compliance Workspace (Alt+2)"
"?" icon in top nav → Keyboard shortcuts reference

13. Data Export & Reporting Navigation
13.1 Export Actions Location
List Views:
┌──────────────────────────────────────────────────────────────┐
│ CTR Review Queue                              [↓ Export]      │
├──────────────────────────────────────────────────────────────┤
│ Filters: [Status ▼] [Date Range ▼]           [🔍 Search]     │
├──────────────────────────────────────────────────────────────┤
│ 156 CTRs matching filters                                    │
└──────────────────────────────────────────────────────────────┘

Export Dropdown:
Export ▼
─────────────────────────
📄 Export Current View (CSV)
📊 Export with Details (Excel)
📋 Custom Export...
─────────────────────────
Export filters: Applied
Export limit: 1000 rows max

13.2 Report Generation Flows
Compliance Reports (FATF, CBL):
Navigation: Audit & Oversight > Executive Dashboards > Compliance Reports
┌──────────────────────────────────────────────────────────────┐
│ Compliance Reports                                           │
├──────────────────────────────────────────────────────────────┤
│ 📅 Monthly Statistical Report                                │
│    Period: [January 2026 ▼]                                 │
│    [Generate Report]                                         │
│                                                              │
│ 📊 Quarterly Compliance Report                              │
│    Quarter: [Q1 2026 ▼]                                     │
│    [Generate Report]                                         │
│                                                              │
│ 📈 Annual Typology Analysis                                 │
│    Year: [2025 ▼]                                           │
│    [Generate Report]                                         │
│                                                              │
│ Recent Reports:                                              │
│ • Monthly Report - December 2025 (PDF) [Download]           │
│ • Quarterly Report - Q4 2025 (PDF) [Download]               │
└──────────────────────────────────────────────────────────────┘

Report Generation States:
[Generate Report] → [⏳ Generating...] → [✓ Report Ready] → [Download PDF]


Progress indicator:
┌──────────────────────────────────────┐
│ Generating Monthly Report...         │
│ ████████████░░░░░░░░ 60%             │
│ Collecting data from 46 entities...  │
└──────────────────────────────────────┘

13.3 Audit Trail Access
Object-Level Audit Trail:
Any object detail page (Report/Case/Intelligence):
Header Actions: [View] [Edit] [History] [Export] [••• More]


Click [History]:
┌──────────────────────────────────────────────────────────────┐
│ Audit Trail: Report FIA-2026-0156                            │
├──────────────────────────────────────────────────────────────┤
│ ✓ Disseminated        Jan 15, 2026 14:30  OIC_User          │
│ ✓ Intelligence Created Jan 14, 2026 09:15  Analyst_J        │
│ ✓ Escalated           Jan 10, 2026 16:45  HeadCompliance_A  │
│ ✓ Compliance Review   Jan 8, 2026 11:20   CompOfficer_B     │
│ ✓ Validated           Jan 5, 2026 08:05   System (Auto)     │
│ ✓ Submitted           Jan 5, 2026 08:00   BankOfMonrovia    │
│                                                              │
│ [View Full Audit Log →]                                      │
└──────────────────────────────────────────────────────────────┘

System-Wide Audit Search:
Navigation: Audit & Oversight > Audit Logs > Search Audit Events
┌──────────────────────────────────────────────────────────────┐
│ Search Audit Events                                          │
├──────────────────────────────────────────────────────────────┤
│ Object Type:  [All ▼]        Actor: [All Users ▼]           │
│ Action Type:  [All ▼]        Date: [Last 30 days ▼]         │
│ Search:       [_____________________________________] [🔍]   │
│                                                              │
│ Results: 1,234 audit events                                  │
├──────────────────────────────────────────────────────────────┤
│ Jan 20, 2026 14:30 | StageTransition | FIA-2026-0178 |...  │
│ Jan 20, 2026 14:15 | Assignment      | CTR Batch     |...  │
│ Jan 20, 2026 13:45 | Export          | Report List   |...  │
└──────────────────────────────────────────────────────────────┘


14. Help & Documentation Navigation
14.1 Contextual Help
Help Icon Locations:
Page headers (? icon)
Complex forms (? icon next to field labels)
Empty states ("Learn more" links)
Help Popover Pattern:
Hover/Click (?) icon:
┌─────────────────────────────────────┐
│ CTR Review Process                  │
├─────────────────────────────────────┤
│ Review submitted Currency           │
│ Transaction Reports to identify     │
│ patterns requiring escalation.      │
│                                     │
│ [View Full Guide →]                 │
└─────────────────────────────────────┘

14.2 Help Documentation Structure
Access Point: User dropdown > Help Documentation
┌──────────────────────────────────────────────────────────────┐
│ Help & Documentation                           [× Close]      │
├──────────────────────────────────────────────────────────────┤
│ 🔍 Search documentation... [_____________________]           │
├──────────────────────────────────────────────────────────────┤
│ Getting Started                                              │
│  • Quick Start Guide                                         │
│  • Understanding Your Role                                   │
│  • Navigation Overview                                       │
│                                                              │
│ Workflows                                                    │
│  • Submitting Reports (Reporting Entity)                    │
│  • Validating Reports (Compliance)                          │
│  • Reviewing CTRs (Compliance)                              │
│  • Analyzing Reports (Analysis)                             │
│  • Managing Cases (Analysis)                                │
│  • Disseminating Intelligence (OIC)                         │
│                                                              │
│ Features                                                     │
│  • Rules Management                                          │
│  • Alert System                                              │
│  • Subject Profiles                                          │
│  • Audit Logs                                                │
│                                                              │
│ Administrator Guides                                         │
│  • User Management                                           │
│  • System Configuration                                      │
│  • Backup & Recovery                                         │
│                                                              │
│ FAQs & Troubleshooting                                       │
│                                                              │
│ [📧 Contact Support]  [📺 Video Tutorials]                   │
└──────────────────────────────────────────────────────────────┘

14.3 Onboarding & Tours
First-Time User Experience:
Login (first time) → Welcome modal:
┌──────────────────────────────────────────────────────────────┐
│ Welcome to FIA SupTech365                                    │
├──────────────────────────────────────────────────────────────┤
│ You're logged in as: Compliance Officer                      │
│                                                              │
│ Would you like a guided tour of your workspace?              │
│                                                              │
│ The tour will show you:                                      │
│  • How to access your validation queue                      │
│  • How to review CTRs                                        │
│  • How to escalate reports                                   │
│  • Where to find help                                        │
│                                                              │
│ [Start Tour]  [Skip for Now]  [☐ Don't show again]          │
└──────────────────────────────────────────────────────────────┘

Interactive Tour Pattern:
Step 1/5: Validation Queue
┌──────────────────────────────────────┐
│ This is your Validation Queue        │ ← Spotlight on sidebar item
│                                      │
│ New reports requiring manual         │
│ validation will appear here.         │
│                                      │
│ [Next →]  [Skip Tour]                │
└──────────────────────────────────────┘

Tour Re-Launch:
User dropdown > Help Documentation > "Restart Workspace Tour"
Available per workspace (different tours for different roles)

15. Offline & Connectivity States
15.1 Offline Detection
Connection Lost Banner:
┌──────────────────────────────────────────────────────────────┐
│ ⚠️ No internet connection. Working in offline mode.          │
│    Changes will be saved when connection is restored.        │
└──────────────────────────────────────────────────────────────┘
Position: Top of page, below top nav, above breadcrumbs
Color: Amber background (#FEF3C7)
Dismissible: No (persistent until reconnected)

Reconnection Banner:
┌──────────────────────────────────────────────────────────────┐
│ ✓ Connection restored. Syncing changes...                    │
└──────────────────────────────────────────────────────────────┘
Duration: 3 seconds, then auto-dismiss
Color: Green background (#D1FAE5)

15.2 Offline Capabilities
Read-Only Access:
Previously loaded pages remain viewable
Navigation works for cached pages
Search limited to cached data
No new data fetching
Action Restrictions:
Offline state - Action buttons:
[📋 Accept] (disabled)
[↩️ Return] (disabled)
[❌ Reject] (disabled)


Tooltip on hover:
"This action requires an internet connection"

Offline Indicator:
Top nav, left of notifications:
[📡 Offline Mode]


Color: Gray
Pulsing animation: None (static)

15.3 Slow Connection Handling
Slow Connection Banner:
┌──────────────────────────────────────────────────────────────┐
│ ⏱️ Slow connection detected. Some features may be limited.   │
│    [Switch to Low Bandwidth Mode]                            │
└──────────────────────────────────────────────────────────────┘
Trigger: API response time >3 seconds for 3 consecutive requests

Low Bandwidth Mode:
Disable auto-refresh
Reduce image quality
Defer non-critical data loading
Show simplified charts (no animations)
Badge in top nav: "Low Bandwidth Mode [⚙️]"

16. Multi-Tab & Session Management
16.1 Multiple Tab Behavior
Concurrent Tab Detection:
Open system in new tab while already open:
┌──────────────────────────────────────────────────────────────┐
│ ⚠️ Multiple Tabs Detected                                    │
├──────────────────────────────────────────────────────────────┤
│ FIA SupTech365 is already open in another tab/window.       │
│                                                              │
│ Working in multiple tabs may cause data conflicts.           │
│ We recommend using a single tab for the best experience.     │
│                                                              │
│ [Continue Anyway]  [Close This Tab]                          │
└──────────────────────────────────────────────────────────────┘

Tab Synchronization:
Navigation state: Independent per tab
Data cache: Shared across tabs (localStorage)
Notifications: Appear in all tabs
Actions in one tab → Refresh data in other tabs
Conflict Resolution:
User edits same report in two tabs:
Tab 1: Accepts report
Tab 2: Attempts to accept same report


Tab 2 shows:
┌──────────────────────────────────────────────────────────────┐
│ ⚠️ Action Conflict                                           │
├──────────────────────────────────────────────────────────────┤
│ This report was already accepted in another tab.             │
│                                                              │
│ Current status: Accepted (Compliance Review)                 │
│ Action by: You (2 minutes ago)                               │
│                                                              │
│ [Reload Page]  [View Updated Report]                         │
└──────────────────────────────────────────────────────────────┘

16.2 Session Timeout Handling
Inactivity Warning:
After 25 minutes of inactivity (default: 30 min session timeout):
┌──────────────────────────────────────────────────────────────┐
│ ⏱️ Session Expiring Soon                                     │
├──────────────────────────────────────────────────────────────┤
│ Your session will expire in 5 minutes due to inactivity.     │
│                                                              │
│ Any unsaved changes will be lost.                            │
│                                                              │
│ [Stay Logged In]  [Save & Logout]                            │
└──────────────────────────────────────────────────────────────┘


Timer countdown: 04:59, 04:58, 04:57...

Session Expired:
After 30 minutes of inactivity:
┌──────────────────────────────────────────────────────────────┐
│ 🔒 Session Expired                                           │
├──────────────────────────────────────────────────────────────┤
│ Your session has expired for security reasons.               │
│                                                              │
│ Please log in again to continue.                             │
│                                                              │
│ [Log In]                                                      │
└──────────────────────────────────────────────────────────────┘


Redirect: Login page
Return URL: Preserved (redirects back after login)

Auto-Save Before Timeout:
Forms with unsaved changes → Auto-saved to localStorage
After re-authentication → Restore form state
Banner: "✓ Your draft has been restored"
16.3 Re-Authentication for Sensitive Actions
Re-Auth Prompt:
User attempts sensitive action (e.g., Disseminate Intelligence, Approve Break-Glass):
┌──────────────────────────────────────────────────────────────┐
│ 🔐 Confirm Your Identity                                     │
├──────────────────────────────────────────────────────────────┤
│ This action requires re-authentication for security.          │
│                                                              │
│ Username: oic_user (read-only)                               │
│ Password: [________________]                                  │
│                                                              │
│ [Cancel]  [Confirm]                                           │
└──────────────────────────────────────────────────────────────┘


Timeout: 30 seconds (auto-cancel)
Failed attempts: 3 max, then force logout

Re-Auth Grace Period:
After successful re-auth → 15 minute grace period
Sensitive actions within 15 min → No re-auth required
Indicator in top nav: "🔓 Elevated Session (12:34 remaining)"

17. Print & PDF Export Views
17.1 Print-Optimized Layouts
Print Trigger:
Object detail page:
Actions: [View] [Edit] [History] [🖨️ Print] [Export PDF]


Click [🖨️ Print] → Opens browser print dialog with optimized view

Print View Transformations:
Hide navigation (top nav, sidebar, breadcrumbs)
Hide action buttons
Expand collapsed sections
Convert interactive elements to static text
Add print header/footer with page numbers
Print Header:
┌──────────────────────────────────────────────────────────────┐
│ Financial Intelligence Agency - SupTech365                   │
│ Report: FIA-2026-0156 (CTR)        Printed: Jan 20, 2026     │
└──────────────────────────────────────────────────────────────┘

Print Footer:
┌──────────────────────────────────────────────────────────────┐
│ CONFIDENTIAL - For Official Use Only          Page 1 of 3    │
└──────────────────────────────────────────────────────────────┘

17.2 PDF Export
PDF Export Options:
Click [Export PDF]:
┌──────────────────────────────────────────────────────────────┐
│ Export as PDF                                                │
├──────────────────────────────────────────────────────────────┤
│ Include:                                                      │
│ ☑ Report Details                                             │
│ ☑ Subject Information                                        │
│ ☑ Transaction Details                                        │
│ ☑ Alert History                                              │
│ ☑ Audit Trail                                                │
│ ☐ Comments & Annotations                                     │
│                                                              │
│ Watermark: [☑ CONFIDENTIAL]                                  │
│                                                              │
│ [Cancel]  [Generate PDF]                                      │
└──────────────────────────────────────────────────────────────┘

PDF Generation Progress:
[Generate PDF] → [⏳ Generating...] → [✓ Ready] → [Download]


Progress:
┌──────────────────────────────────────┐
│ Generating PDF...                    │
│ ████████████████░░░░ 80%             │
│ Adding watermark...                  │
└──────────────────────────────────────┘

PDF Security:
Watermark: "CONFIDENTIAL - FIA - [Username] - [Date]"
Metadata: Author, creation date, document ID
Password protection: Optional (for Intelligence reports)
Audit log entry: PDF export event recorded

18. Implementation Checklist
18.1 Navigation Structure
[ ] Top navigation bar (64px fixed height)
[ ] Sidebar navigation (240px expanded, 64px collapsed)
[ ] Breadcrumb navigation (48px height)
[ ] Mobile hamburger menu with slide-out panel
[ ] Role-based menu item filtering
[ ] Badge notification system
[ ] Global search with quick results dropdown
18.2 Workspace Implementation
[ ] Reporting Entity Workspace (all sub-sections)
[ ] Compliance Workspace (all sub-sections)
[ ] Analysis Workspace (all sub-sections)
[ ] Case & Intelligence Workspace (all sub-sections)
[ ] Rules Management Workspace (domain separation)
[ ] Audit & Oversight Workspace (all sub-sections)
[ ] Administration Workspace (all sub-sections)
18.3 Routing & State Management
[ ] Complete URL routing structure
[ ] Route authorization guards
[ ] URL query parameter synchronization
[ ] Deep linking support
[ ] Browser back/forward handling
[ ] State preservation on navigation
18.4 Responsive Design
[ ] Mobile layout (<768px)
[ ] Tablet layout (768-1024px)
[ ] Desktop layout (≥1024px)
[ ] Touch gesture support
[ ] Responsive breakpoint handling
[ ] Transition animations
18.5 Accessibility
[ ] Keyboard navigation support
[ ] Screen reader compatibility (ARIA labels)
[ ] Focus management
[ ] Color contrast compliance (WCAG AA)
[ ] Touch target sizes (44px minimum)
[ ] Alt text for images/icons
18.6 User Experience
[ ] Loading states (skeleton screens)
[ ] Error states (403, 404, conflicts)
[ ] Notification system (toast, persistent, in-app)
[ ] Offline detection and handling
[ ] Session timeout warnings
[ ] Re-authentication flows
[ ] Contextual help system
[ ] Onboarding tours
18.7 Performance
[ ] Navigation menu lazy loading
[ ] Badge count caching
[ ] Virtual scrolling for long lists
[ ] Optimistic UI updates
[ ] Route prefetching
[ ] Progressive content loading
18.8 Security & Audit
[ ] Break-glass access tracking
[ ] Audit trail for navigation events
[ ] PDF export security (watermarks, metadata)
[ ] Multi-tab conflict detection
[ ] Session management
[ ] Re-authentication for sensitive actions

19. Acceptance Criteria
19.1 Navigation Acceptance
✓ All navigation items render only for authorized roles
✓ Sidebar collapses/expands smoothly (200ms transition)
✓ Breadcrumbs accurately reflect current location
✓ Badge counts update in real-time
✓ Global search returns results within 500ms
✓ Mobile hamburger menu slides smoothly (250ms)
19.2 Workspace Acceptance
✓ Default landing pages load correctly per role
✓ Workspace-specific navigation items appear correctly
✓ Filters persist in URL and restore on reload
✓ List sorting and pagination work correctly
✓ Export functions generate correct output
19.3 Routing Acceptance
✓ All routes enforce authorization rules
✓ Direct links (deep linking) work correctly
✓ Browser back/forward buttons work as expected
✓ URL state synchronizes with UI state
✓ 403/404 errors display appropriate messages
19.4 Responsive Acceptance
✓ Mobile layout adapts correctly (<768px)
✓ Tablet layout shows collapsed sidebar (768-1024px)
✓ Desktop layout shows expanded sidebar (≥1024px)
✓ Touch targets meet 44px minimum on mobile
✓ Swipe gestures work on mobile navigation
19.5 Accessibility Acceptance
✓ All interactive elements are keyboard-accessible
✓ Screen readers announce navigation changes
✓ Focus indicators are visible (2px outline)
✓ Color contrast meets WCAG AA standards (4.5:1)
✓ ARIA labels present on all navigation elements
19.6 Performance Acceptance
✓ Initial page load <2 seconds
✓ Navigation transitions <200ms
✓ List views load first 25 items <1 second
✓ Badge counts update <500ms
✓ Global search results appear <500ms
✓ Virtual scrolling handles 1000+ items smoothly
19.7 User Experience Acceptance
✓ Notifications appear within 1 second of trigger event
✓ Loading skeletons display during data fetch
✓ Error messages are clear and actionable
✓ Session timeout warning appears 5 minutes before expiry
✓ Offline mode activates within 3 seconds of connection loss
✓ Help documentation is context-sensitive

END OF DOCUMENT
Document Version: 2.0
 Last Updated: January 20, 2026
 Status: Final Implementation Specification
 Next Review: Upon completion of Phase 1 implementation

