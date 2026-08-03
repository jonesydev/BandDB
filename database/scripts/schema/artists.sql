-- Table: public.artists

-- DROP TABLE IF EXISTS public.artists;

CREATE TABLE IF NOT EXISTS public.artists
(
    artist_id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    artist_name text COLLATE pg_catalog."default",
    albums jsonb,
    styles text[] COLLATE pg_catalog."default",
    influences text[] COLLATE pg_catalog."default",
    CONSTRAINT artists_pkey PRIMARY KEY (artist_id),
    CONSTRAINT check_column_schema CHECK (jsonb_matches_schema('{
      "name": "string",
      "year": "int"     
   }'::json, albums))
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.artists
    OWNER to postgres;

REVOKE ALL ON TABLE public.artists FROM jonesy;

GRANT SELECT ON TABLE public.artists TO jonesy;

GRANT ALL ON TABLE public.artists TO postgres;