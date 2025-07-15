import React from 'react';
import './Experience.css';

const experiences = [
  {
    client: 'Fifth Third Bank',
    duration: 'Dec 2024 – Present',
    role: 'Sr. Full Stack Engineer',
    responsibilities: [
      'Developed fully automated CI/CD pipelines using GitLab, Jenkins, Terraform, and AWS services to streamline deployments and infrastructure provisioning.',
      'Built scalable RESTful APIs and web apps using Python (FastAPI, Flask), React.js, Docker, Kubernetes, and PostgreSQL.',
      'Designed ETL pipelines with AWS Lambda, Step Functions, and S3 for efficient data processing and real-time analytics.',
      'Engineered streaming data pipelines with Apache Kafka, Apache Spark, and Flink for fault-tolerant, real-time event processing.',
      'Created dashboards and monitoring systems using ELK stack, Prometheus, Grafana, and Redis to visualize key business metrics.',
    ],
    tech: 'Python (FastAPI, Flask, Django), React.js, PostgreSQL, MongoDB, Cassandra, MySQL, Docker, Kubernetes, Jenkins, GitLab CI/CD, Terraform, Ansible, AWS (Lambda, EC2, S3, Redshift, EMR), Apache Kafka, Apache Spark, Apache Flink, ELK Stack, Redis, Prometheus, Grafana, Celery, RabbitMQ',
  },
  {
    client: 'Standard Chartered Bank',
    duration: 'Sept 2021 – Apr 2023',
    role: 'Full Stack Python Developer',
    responsibilities: [
      'Developed consumer-facing web applications with Django, React.js, and RESTful APIs, following Agile and TDD best practices.',
      'Managed container orchestration with Kubernetes and Docker, ensuring high availability and scalability.',
      'Automated cloud deployments using Ansible, Terraform, and AWS CloudFormation.',
      'Integrated real-time data processing pipelines using Apache Kafka and Apache Spark, supporting batch and streaming workloads.',
    ],
    tech: 'Python (Django, Flask, FastAPI), React.js, PostgreSQL, MongoDB, Docker, Kubernetes, Jenkins, Git, AWS (EC2, Elastic Beanstalk, S3), Apache Kafka, Apache Spark, Terraform, Ansible, Celery, RabbitMQ',
  },
  {
    client: 'FinLender',
    duration: 'May 2019 – Aug 2021',
    role: 'Python Developer',
    responsibilities: [
        'Built backend services with Spring and Python frameworks, and frontend SPAs using React.js and Flux architecture.',
        'Developed NLP models for analytics dashboards and integrated with Kafka and Spark pipelines for data processing.',
        'Implemented CI/CD automation and infrastructure monitoring using Jenkins, Docker, Nagios, and Puppet.',
    ],
    tech: 'Spring Framework, Hibernate, Python (Django, Pyramid), React.js, JavaScript, AJAX, Docker, Jenkins, Apache Kafka, Apache Spark, Apache Oozie, Maven, Ant, Puppet, Nagios', 
  },
  {
    client: 'Manomay Innsurtech',
    duration: 'June 2018 – Apr 2019',
    role: 'Software Engineer',
    responsibilities: [
        'Designed and managed MySQL databases and ETL workflows using SSIS.',
        'Developed cloud-native applications with Django, React.js, and AWS services (EC2, S3, CloudFront).',
        'Automated infrastructure tasks with Bash, Python, Boto3, Terraform, and Ansible.',
        'Developed asynchronous Python components using asyncio and followed TDD for backend reliability.',
    ],
    tech: 'MySQL, SQL Server Integration Services (SSIS), Python (Django, asyncio), React.js, Redux, PHP, Bash, AWS (EC2, S3, CloudFront), Terraform, Ansible, Boto3, Oracle WebLogic Server',
  },

];

const Experience = () => {
  return (
    <section className="experience-section">
      <h2 className="experience-heading">Professional Experience</h2>
      {experiences.map((exp, index) => (
        <div className="experience-card" key={index}>
          <div className="experience-header">
            <h3 className="experience-client">{exp.client}</h3>
            <span className="experience-duration">{exp.duration}</span>
          </div>
          <h4 className="experience-role">{exp.role}</h4>
          <ul className="experience-list">
            {exp.responsibilities.map((task, idx) => (
              <li key={idx}>{task}</li>
            ))}
          </ul>
          <p className="experience-tech"><strong>Tech Used:</strong> {exp.tech}</p>
        </div>
      ))}
    </section>
  );
};

export default Experience;
