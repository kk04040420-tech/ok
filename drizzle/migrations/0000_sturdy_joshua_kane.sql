CREATE TABLE "educations" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"school" text NOT NULL,
	"major" text NOT NULL,
	"degree" text NOT NULL,
	"start_date" date NOT NULL,
	"end_date" date,
	"description" text,
	"sort_order" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "experience_tech_stack" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"experience_id" uuid NOT NULL,
	"tech" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "experiences" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"company" text NOT NULL,
	"role" text NOT NULL,
	"start_date" date NOT NULL,
	"end_date" date,
	"description" text NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "project_tech_stack" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"project_id" uuid NOT NULL,
	"tech" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "projects" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"github_url" text,
	"live_url" text,
	"image_url" text,
	"sort_order" integer DEFAULT 0 NOT NULL,
	"created_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "skills" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"category" text NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
ALTER TABLE "experience_tech_stack" ADD CONSTRAINT "experience_tech_stack_experience_id_experiences_id_fk" FOREIGN KEY ("experience_id") REFERENCES "public"."experiences"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "project_tech_stack" ADD CONSTRAINT "project_tech_stack_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;