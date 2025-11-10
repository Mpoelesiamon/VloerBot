import { motion } from "framer-motion";
import { useMemo } from "react";

interface MessageBubbleProps {
  message: string;
  isUser: boolean;
  timestamp?: string;
  attachments?: Array<{ url: string; fileName: string }>;
  botAvatar?: string;
  userAvatar?: string;
}

const MessageBubble = ({ message, isUser, timestamp, attachments, botAvatar, userAvatar }: MessageBubbleProps) => {
  const avatarUrl = useMemo(() => {
    if (typeof window !== 'undefined' && window.vloerbotConfig) {
      return isUser ? (window.vloerbotConfig.userAvatar || userAvatar) : (window.vloerbotConfig.botAvatar || botAvatar);
    }
    return isUser ? userAvatar : botAvatar;
  }, [isUser, botAvatar, userAvatar]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4 gap-2`}
    >
      {/* Avatar for bot messages (left side) */}
      {!isUser && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full overflow-hidden flex items-center justify-center bg-gray-200">
          {avatarUrl ? (
            <img 
              src={avatarUrl} 
              alt="Bot Avatar" 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-[#d5803f] flex items-center justify-center text-white text-xs font-bold">
              VB
            </div>
          )}
        </div>
      )}

      <div className={`max-w-[75%] ${isUser ? "order-2" : "order-1"}`}>
        {attachments && attachments.length > 0 && (
          <div className="mb-2 flex flex-wrap gap-2">
            {attachments.map((attachment, index) => {
              const isImage = attachment.fileName.match(/\.(jpg|jpeg|png|gif|webp)$/i);
              return isImage ? (
                <img
                  key={index}
                  src={attachment.url}
                  alt={attachment.fileName}
                  className="max-w-[200px] rounded-lg border border-border"
                />
              ) : null;
            })}
          </div>
        )}
        <div
          className={`px-3 py-2 rounded-2xl ${
            isUser
              ? "bg-[#d5803f] text-white rounded-br-sm"
              : "bg-[#e2e8f0] text-gray-800 rounded-bl-sm"
          }`}
        >
          <p className="text-[18px] leading-relaxed whitespace-pre-wrap break-words font-sans">
            {message}
          </p>
        </div>
        {timestamp && (
          <p className={`text-xs text-muted-foreground mt-1 px-2 ${isUser ? "text-right" : "text-left"}`}>
            {timestamp}
          </p>
        )}
      </div>

      {/* Avatar for user messages (right side) */}
      {isUser && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full overflow-hidden flex items-center justify-center bg-gray-200">
          {avatarUrl ? (
            <img 
              src={avatarUrl} 
              alt="User Avatar" 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-[#d5803f] flex items-center justify-center text-white text-xs font-bold">
              U
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default MessageBubble;
