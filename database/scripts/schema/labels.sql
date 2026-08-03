-- Table: public.labels

-- DROP TABLE IF EXISTS public.labels;

CREATE TABLE IF NOT EXISTS public.labels
(
    label_id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    label_name text COLLATE pg_catalog."default",
    year_founded integer,
    founder text[] COLLATE pg_catalog."default",
    artists text[] COLLATE pg_catalog."default",
    is_active boolean,
    year_ended integer,
    origin text COLLATE pg_catalog."default",
    albums text[] COLLATE pg_catalog."default",
    CONSTRAINT labels_pkey PRIMARY KEY (label_id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.labels
    OWNER to postgres;

REVOKE ALL ON TABLE public.labels FROM jonesy;

GRANT SELECT ON TABLE public.labels TO jonesy;

GRANT ALL ON TABLE public.labels TO postgres;