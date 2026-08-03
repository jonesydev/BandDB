-- Table: public.members

-- DROP TABLE IF EXISTS public.members;

CREATE TABLE IF NOT EXISTS public.members
(
    member_id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    first_name text COLLATE pg_catalog."default",
    middle_name text COLLATE pg_catalog."default",
    last_name text COLLATE pg_catalog."default",
    known_as text COLLATE pg_catalog."default",
    date_of_birth date,
    date_of_death date,
    age integer,
    origin text COLLATE pg_catalog."default",
    other_projects jsonb,
    influences text[] COLLATE pg_catalog."default",
    years_with_artist text COLLATE pg_catalog."default",
    role text[] COLLATE pg_catalog."default",
    CONSTRAINT members_pkey PRIMARY KEY (member_id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.members
    OWNER to postgres;

REVOKE ALL ON TABLE public.members FROM jonesy;

GRANT SELECT ON TABLE public.members TO jonesy;

GRANT ALL ON TABLE public.members TO postgres;