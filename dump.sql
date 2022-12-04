--
-- PostgreSQL database dump
--

-- Dumped from database version 15.1
-- Dumped by pg_dump version 15.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: my_user
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO my_user;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: emplyee; Type: TABLE; Schema: public; Owner: my_user
--

CREATE TABLE public.emplyee (
    id integer NOT NULL,
    name character varying NOT NULL,
    "salaryDollars" integer NOT NULL
);


ALTER TABLE public.emplyee OWNER TO my_user;

--
-- Name: emplyee_id_seq; Type: SEQUENCE; Schema: public; Owner: my_user
--

CREATE SEQUENCE public.emplyee_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.emplyee_id_seq OWNER TO my_user;

--
-- Name: emplyee_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: my_user
--

ALTER SEQUENCE public.emplyee_id_seq OWNED BY public.emplyee.id;


--
-- Name: pet; Type: TABLE; Schema: public; Owner: my_user
--

CREATE TABLE public.pet (
    id integer NOT NULL,
    name character varying NOT NULL,
    age integer NOT NULL
);


ALTER TABLE public.pet OWNER TO my_user;

--
-- Name: pet_id_seq; Type: SEQUENCE; Schema: public; Owner: my_user
--

CREATE SEQUENCE public.pet_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.pet_id_seq OWNER TO my_user;

--
-- Name: pet_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: my_user
--

ALTER SEQUENCE public.pet_id_seq OWNED BY public.pet.id;


--
-- Name: emplyee id; Type: DEFAULT; Schema: public; Owner: my_user
--

ALTER TABLE ONLY public.emplyee ALTER COLUMN id SET DEFAULT nextval('public.emplyee_id_seq'::regclass);


--
-- Name: pet id; Type: DEFAULT; Schema: public; Owner: my_user
--

ALTER TABLE ONLY public.pet ALTER COLUMN id SET DEFAULT nextval('public.pet_id_seq'::regclass);


--
-- Data for Name: emplyee; Type: TABLE DATA; Schema: public; Owner: my_user
--

COPY public.emplyee (id, name, "salaryDollars") FROM stdin;
3       ali     100
4       aamal   100
5       wadhah  100
6       mahjoub 765
7       souheb  987
\.


--
-- Data for Name: pet; Type: TABLE DATA; Schema: public; Owner: my_user
--

COPY public.pet (id, name, age) FROM stdin;
\.


--
-- Name: emplyee_id_seq; Type: SEQUENCE SET; Schema: public; Owner: my_user
--

SELECT pg_catalog.setval('public.emplyee_id_seq', 7, true);


--
-- Name: pet_id_seq; Type: SEQUENCE SET; Schema: public; Owner: my_user
--

SELECT pg_catalog.setval('public.pet_id_seq', 1, false);


--
-- Name: emplyee PK_95ddcc6f5a6c9aba85b83ec00d8; Type: CONSTRAINT; Schema: public; Owner: my_user
--

ALTER TABLE ONLY public.emplyee
    ADD CONSTRAINT "PK_95ddcc6f5a6c9aba85b83ec00d8" PRIMARY KEY (id);


--
-- Name: pet PK_b1ac2e88e89b9480e0c5b53fa60; Type: CONSTRAINT; Schema: public; Owner: my_user
--

ALTER TABLE ONLY public.pet
    ADD CONSTRAINT "PK_b1ac2e88e89b9480e0c5b53fa60" PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--