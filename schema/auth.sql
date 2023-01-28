-- CreateTable
create table "Account" (
  "id" TEXT not null,
  "userId" TEXT not null,
  "type" TEXT not null,
  "provider" TEXT not null,
  "providerAccountId" TEXT not null,
  "refresh_token" TEXT,
  "access_token" TEXT,
  "expires_at" INTEGER,
  "token_type" TEXT,
  "scope" TEXT,
  "id_token" TEXT,
  "session_state" TEXT,
  constraint "Account_pkey" primary key ("id")
);

-- CreateTable
create table "Session" (
  "id" TEXT not null,
  "sessionToken" TEXT not null,
  "userId" TEXT not null,
  "expires" TIMESTAMP(3) not null,
  constraint "Session_pkey" primary key ("id")
);

-- CreateTable
create table "User" (
  "id" TEXT not null,
  "name" TEXT,
  "email" TEXT,
  "emailVerified" TIMESTAMP(3),
  "image" TEXT,
  constraint "User_pkey" primary key ("id")
);

-- CreateTable
create table "VerificationToken" (
  "identifier" TEXT not null,
  "token" TEXT not null,
  "expires" TIMESTAMP(3) not null
);

-- CreateTable
create table "Post" (
  "id" TEXT not null,
  "title" TEXT not null,
  "content" TEXT,
  "published" BOOLEAN not null default false,
  "authorId" TEXT,
  constraint "Post_pkey" primary key ("id")
);

-- CreateIndex
create unique index "Account_provider_providerAccountId_key" on "Account"("provider", "providerAccountId");

-- CreateIndex
create unique index "Session_sessionToken_key" on "Session"("sessionToken");

-- CreateIndex
create unique index "User_email_key" on "User"("email");

-- CreateIndex
create unique index "VerificationToken_token_key" on "VerificationToken"("token");

-- CreateIndex
create unique index "VerificationToken_identifier_token_key" on "VerificationToken"("identifier", "token");

-- AddForeignKey
alter table "Account"
add constraint "Account_userId_fkey" foreign key ("userId") references "User"("id") on delete cascade on update cascade;

-- AddForeignKey
alter table "Session"
add constraint "Session_userId_fkey" foreign key ("userId") references "User"("id") on delete cascade on update cascade;

-- AddForeignKey
alter table "Post"
add constraint "Post_authorId_fkey" foreign key ("authorId") references "User"("id") on delete
set null on update cascade;