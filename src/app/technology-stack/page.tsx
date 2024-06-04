import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import Image from 'next/image'

import logoCplusplus from '@/images/logos/cplusplus.svg'
import logoJava from '@/images/logos/java.svg'
import logoGo from '@/images/logos/go.svg'
import logoPython from '@/images/logos/python.svg'
import logoTypescript from '@/images/logos/typescript.svg'
import logoJavascript from '@/images/logos/javascript.svg'
import logoSpringBoot from '@/images/logos/spring.svg'
import logoSpringCloud from '@/images/logos/spring.svg'
import logoNextjs from '@/images/logos/nextjs.svg'
import logoExpress from '@/images/logos/nodejs.svg'
import logoDocker from '@/images/logos/docker.svg'
import logoKubernetes from '@/images/logos/kubernetes.svg'
import logoGraphql from '@/images/logos/graphql.svg'
import logoAWS from '@/images/logos/aws.svg'
import logoGCP from '@/images/logos/google-cloud.svg'
import logoKafka from '@/images/logos/kafka.svg'
import logoRabbitMQ from '@/images/logos/rabbitmq.svg'
import logoMongoDB from '@/images/logos/mongodb.svg'
import logoPostgreSQL from '@/images/logos/postgresql.svg'
import logoRedis from '@/images/logos/redis.svg'
import logoElasticsearch from '@/images/logos/elasticsearch.svg'
import logoGRPC from '@/images/logos/grpc.svg'
import logoReact from '@/images/logos/react.svg'
import logoMySQL from '@/images/logos/mysql.svg'
import React from 'react'

function ToolsSection({
  title,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section> & { title: string }) {
  return (
    <Section title={title} {...props}>
      <ul role="list" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  imageSrc,
}: {
  title: string
  href?: string
  imageSrc?: string
}) {
  return (
    <Card as="li" className="flex flex-col items-center justify-center space-y-2 p-4 border rounded-lg shadow-md w-full">
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={`${title} logo`}
          className="h-12 w-12"
          width={48}
          height={48}
          unoptimized
        />
      )}
      <Card.Title as="h3" href={href} className="text-center text-lg font-semibold">
        {title}
      </Card.Title>
    </Card>
  )
}


export const metadata = {
  title: 'Technology Stack',
  description: 'Programming Languages, Frameworks, Libraries, and Tools I Have Mastered.',
}

export default function TechStack() {
  return (
    <SimpleLayout
      title="Technology Stack"
      intro="Here are the programming languages, frameworks, libraries, and tools I have mastered."
    >
      <div className="space-y-12">
        <ToolsSection title="Programming Languages">
          <Tool title="C++" imageSrc={logoCplusplus} />
          <Tool title="Java" imageSrc={logoJava} />
          <Tool title="Go" imageSrc={logoGo} />
          <Tool title="Python" imageSrc={logoPython} />
          <Tool title="JavaScript" imageSrc={logoJavascript}/>
          <Tool title="TypeScript" imageSrc={logoTypescript}/>
        </ToolsSection>
        <ToolsSection title="Frameworks and Libraries">
          <Tool title="Spring Boot" imageSrc={logoSpringBoot} />
          <Tool title="Spring Cloud" imageSrc={logoSpringCloud} />
          <Tool title="React" imageSrc={logoReact}/>
          <Tool title="Next.js" imageSrc={logoNextjs} />
          <Tool title="Node.js - Express" imageSrc={logoExpress} />
          <Tool title="gRPC" imageSrc={logoGRPC} />
        </ToolsSection>
        <ToolsSection title="Databases">
          <Tool title="MongoDB" imageSrc={logoMongoDB} />
          <Tool title="MySQL" imageSrc={logoMySQL} />
          <Tool title="PostgreSQL" imageSrc={logoPostgreSQL} />
          <Tool title="Redis" imageSrc={logoRedis} />
          <Tool title="Elasticsearch" imageSrc={logoElasticsearch} />
        </ToolsSection>
        <ToolsSection title="Tools and Platforms">
          <Tool title="Docker" imageSrc={logoDocker} />
          <Tool title="Kubernetes" imageSrc={logoKubernetes} />
          <Tool title="GraphQL" imageSrc={logoGraphql} />
          <Tool title="AWS" imageSrc={logoAWS} />
          <Tool title="GCP" imageSrc={logoGCP} />
          <Tool title="Kafka" imageSrc={logoKafka} />
          <Tool title="RabbitMQ" imageSrc={logoRabbitMQ} />
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
