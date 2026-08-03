-- Table: public.albums

-- DROP TABLE IF EXISTS public.albums;

CREATE TABLE IF NOT EXISTS public.albums
(
    album_id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    album_name text COLLATE pg_catalog."default",
    release_date date,
    label text COLLATE pg_catalog."default",
    personnel jsonb,
    artist_id bigint NOT NULL,
    CONSTRAINT albums_pkey PRIMARY KEY (album_id),
    CONSTRAINT fk_albums_artists FOREIGN KEY (artist_id)
        REFERENCES public.artists (artist_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT check_column_schema CHECK (jsonb_matches_schema('{
      "name": "string",
      "role": "string"     
   }'::json, personnel))
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.albums
    OWNER to postgres;

REVOKE ALL ON TABLE public.albums FROM jonesy;

GRANT SELECT ON TABLE public.albums TO jonesy;

GRANT ALL ON TABLE public.albums TO postgres;