import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const TimelineItem = ({ item, isLast }) => {
  const IconComponent = item.icon;

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      className="relative pl-8 sm:pl-32 py-6 group"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-muted-foreground/30 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-primary after:border-4 after:box-content after:border-card after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
        <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-28 h-6 mb-3 sm:mb-0 text-primary bg-primary/10 rounded-full">
          <Calendar className="w-3 h-3 mr-1" />
          {item.date}
        </time>
        <div className="text-xl font-bold text-foreground">{item.title}</div>
      </div>
      {item.subtitle && (
        <div className="text-lg font-semibold text-primary mb-1">{item.subtitle}</div>
      )}
      <div className="text-muted-foreground mb-3">{item.description}</div>
      {item.tags && item.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-2">
          {item.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      {IconComponent && (
        <div className="absolute left-2 sm:left-[6.5rem] top-1 -translate-x-1/2 -translate-y-1/2 p-2 bg-card border rounded-full shadow-md">
           <IconComponent className="w-5 h-5 text-primary" />
        </div>
      )}
       {!isLast && (
        <div className="absolute left-[0.375rem] sm:left-[6.375rem] top-8 h-[calc(100%-1rem)] w-0.5 bg-border"></div>
      )}
    </motion.div>
  );
};

const Timeline = ({ items }) => {
  if (!items || items.length === 0) {
    return <p>No timeline items to display.</p>;
  }

  return (
    <div className="space-y-8">
      {items.map((item, index) => (
        <TimelineItem key={index} item={item} isLast={index === items.length - 1} />
      ))}
    </div>
  );
};

export default Timeline;